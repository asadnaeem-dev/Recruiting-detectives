import os
import re

def convert_html_to_jsx(html_content):
    # Extract body content
    match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.IGNORECASE | re.DOTALL)
    if not match:
        return ""
    body_content = match.group(1)
    
    # Remove <script> tags
    body_content = re.sub(r'<script.*?</script>', '', body_content, flags=re.IGNORECASE | re.DOTALL)
    
    # Convert standard HTML attributes to JSX
    body_content = body_content.replace('class=', 'className=')
    body_content = body_content.replace('for=', 'htmlFor=')
    body_content = body_content.replace('viewbox=', 'viewBox=')
    body_content = body_content.replace('stroke-width=', 'strokeWidth=')
    body_content = body_content.replace('stroke-linecap=', 'strokeLinecap=')
    
    # Convert inline styles (heuristic, might need manual check if complex)
    body_content = re.sub(r'style="([^"]*)"', r'style={{\1}}', body_content)
    
    # Close unclosed tags like img and input
    body_content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', body_content)
    body_content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', body_content)
    body_content = re.sub(r'<path([^>]*?)(?<!/)>', r'<path\1 />', body_content)
    body_content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', body_content, flags=re.DOTALL)

    return f"""
export default function Page() {{
  return (
    <>
      {body_content.strip()}
    </>
  );
}}
"""

def main():
    with open('screen1.html', 'r', encoding='utf-8') as f:
        screen1 = f.read()
    with open('screen2.html', 'r', encoding='utf-8') as f:
        screen2 = f.read()
    with open('screen3.html', 'r', encoding='utf-8') as f:
        screen3 = f.read()
        
    page1 = convert_html_to_jsx(screen1)
    page2 = convert_html_to_jsx(screen2)
    page3 = convert_html_to_jsx(screen3)
    
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(page1)
        
    os.makedirs('app/dashboard', exist_ok=True)
    with open('app/dashboard/page.tsx', 'w', encoding='utf-8') as f:
        f.write(page2)
        
    os.makedirs('app/leaderboard', exist_ok=True)
    with open('app/leaderboard/page.tsx', 'w', encoding='utf-8') as f:
        f.write(page3)

    print("Conversion complete.")

if __name__ == "__main__":
    main()
