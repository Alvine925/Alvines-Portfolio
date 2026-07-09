import os
import re
import json

BASE_PATH = "repo/artifacts/portfolio/src/lib"
BLOG_DIR = f"{BASE_PATH}/blog"
DATA_FILE = f"{BASE_PATH}/data.ts"
METADATA_FILE = f"{BASE_PATH}/blog_metadata.ts"

def extract_imports(content):
    # Map variable names to relative file paths
    imports = {}
    matches = re.findall(r'import \* as (\w+) from "\./blog/([^"]+)";', content)
    for var, path in matches:
        imports[var] = path
    return imports

def extract_blog_entries(content):
    # Find the blogPosts array
    start_match = re.search(r'export const blogPosts = \[', content)
    if not start_match:
        return []
    
    start_index = start_match.end()
    # Find the matching closing bracket for the array
    depth = 1
    end_index = start_index
    while depth > 0 and end_index < len(content):
        if content[end_index] == '[': depth += 1
        elif content[end_index] == ']': depth -= 1
        end_index += 1
    
    array_content = content[start_index:end_index-1]
    
    # Split into individual objects {}
    entries = []
    # Very basic parser for objects in the array
    # Since they are reasonably formatted, we can split by '},'
    raw_entries = re.split(r'},\s*{', array_content)
    for raw in raw_entries:
        entry = {}
        # Clean up brackets
        raw = raw.strip().strip('{}')
        
        # Extract fields using regex
        for field in ['slug', 'title', 'date', 'excerpt']:
            m = re.search(rf'{field}:\s*"([^"]+)"', raw)
            if m: entry[field] = m.group(1)
        
        # Tags array
        m = re.search(r'tags:\s*\[(.*?)\]', raw)
        if m:
            entry['tags'] = [t.strip().strip('"') for t in m.group(1).split(',')]
        
        # Content source and cover image source
        m = re.search(r'content:\s*(\w+)\.content', raw)
        if m: entry['source_var'] = m.group(1)
        
        m = re.search(r'coverImage:\s*(\w+)\.coverImage', raw)
        if m: entry['cover_var'] = m.group(1)
        elif re.search(r'coverImage:\s*"([^"]+)"', raw):
            entry['coverImage'] = re.search(r'coverImage:\s*"([^"]+)"', raw).group(1)
            
        if 'slug' in entry:
            entries.append(entry)
            
    return entries

def process():
    final_metadata = []
    files = [f for f in os.listdir(BLOG_DIR) if f.endswith('.ts')]
    
    print(f"Found {len(files)} blog files in {BLOG_DIR}")
    
    for filename in files:
        slug = filename.replace('.ts', '')
        filepath = os.path.join(BLOG_DIR, filename)
            
        # Read source file
        with open(filepath, 'r') as f:
            source_content = f.read()
            
        # Extract fields using regex
        title_match = re.search(r'export const title = "([^"]+)"', source_content)
        date_match = re.search(r'export const date = "([^"]+)"', source_content)
        excerpt_match = re.search(r'export const excerpt = "([^"]+)"', source_content)
        cover_match = re.search(r'export const coverImage = "([^"]+)"', source_content)
        
        # Check for metadata object format
        meta_obj_match = re.search(r'export const metadata = \{([\s\S]*?)\};', source_content)
        
        title = title_match.group(1) if title_match else None
        date = date_match.group(1) if date_match else None
        excerpt = excerpt_match.group(1) if excerpt_match else ""
        cover = cover_match.group(1) if cover_match else None
        tags = []

        if meta_obj_match:
            meta_obj_str = meta_obj_match.group(1)
            if not title:
                m = re.search(r'title:\s*"([^"]+)"', meta_obj_str)
                if m: title = m.group(1)
            if not date:
                m = re.search(r'date:\s*"([^"]+)"', meta_obj_str)
                if m: date = m.group(1)
            if not excerpt:
                m = re.search(r'excerpt:\s*"([^"]+)"', meta_obj_str)
                if m: excerpt = m.group(1)
            if not cover:
                m = re.search(r'coverImage:\s*"([^"]+)"', meta_obj_str)
                if m: cover = m.group(1)
            
            m = re.search(r'tags:\s*\[(.*?)\]', meta_obj_str, re.DOTALL)
            if m:
                tags = [t.strip().strip('"').strip("'") for t in m.group(1).split(',') if t.strip()]
        else:
            # Fallback to old tags extraction
            tags_match = re.search(r'export const tags = \[(.*?)\]', source_content, re.DOTALL)
            if tags_match:
                tags_str = tags_match.group(1)
                tags = [t.strip().strip('"').strip("'") for t in tags_str.split(',') if t.strip()]

        if title and date:
            meta = {
                "slug": slug,
                "title": title,
                "date": date,
                "excerpt": excerpt,
                "tags": tags,
                "coverImage": cover
            }
            final_metadata.append(meta)
        else:
            # Maybe it's a file without metadata yet (shouldn't happen now but for safety)
            print(f"Warning: Metadata missing in {filename}")

    # Sort by date descending
    final_metadata.sort(key=lambda x: x['date'], reverse=True)
    
    # Write metadata file
    with open(METADATA_FILE, 'w') as f:
        f.write("export interface BlogMetadata {\n")
        f.write("  slug: string;\n")
        f.write("  title: string;\n")
        f.write("  date: string;\n")
        f.write("  excerpt: string;\n")
        f.write("  tags: string[];\n")
        f.write("  coverImage: string | null;\n")
        f.write("}\n\n")
        f.write(f"export const blogMetadata: BlogMetadata[] = {json.dumps(final_metadata, indent=2)};\n")
    
    print(f"Generated {METADATA_FILE}")

if __name__ == "__main__":
    process()
