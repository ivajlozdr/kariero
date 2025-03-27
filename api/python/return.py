import sys
import json

def main():
    # If a URL is passed, simply echo it back
    if len(sys.argv) > 1:
        keyword = sys.argv[1]
        result = {
            "keyword": keyword,
            "message": "URL received successfully"
        }
        print(json.dumps(result))
    else:
        print(json.dumps({"error": "No URL provided"}))

if __name__ == "__main__":
    main()