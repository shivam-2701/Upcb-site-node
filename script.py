from bs4 import BeautifulSoup
import os
import json
from os import getcwd, walk, path
import translators as ts

# import translators as ts


def get_all_files(full_path):
    file_names = []
    for dir_path, dir_paths, file_list in walk(full_path):
        for file_name in file_list:
            file_names.append(path.join(dir_path, file_name))
    return file_names


def translateFile(file_path, wordDict):
    try:
        html = open(file_path, encoding="utf-8").read()
        soup = BeautifulSoup(html, "html.parser")
        elements = ["p", "title", "li", "a", "span", "h1", "h2", "h3", "h4", "h5"]

        for i in soup.findAll(elements):
            if i.string != None and len(str(i.string).strip()) > 0:
                text = str(i.string).strip().replace("\n", "")
                stripped_text = "".join(text.split(" "))
                quotedString = f'"{stripped_text}"'
                wordDict[stripped_text] = text
                replacementStr = f"<%= __({quotedString}) %>"
                i.string.replace_with(replacementStr)

        output_path = file_path
        with open(output_path, "w", encoding="utf-8") as f_output:
            f_output.write(str(soup.prettify(formatter="html5", encoding="utf-8")))
    except Exception as error:
        print(error.__str__())
        print(file_path + " error occured ")


def translateGoogle(file_path):
    try:
        file_name = str(file_path).split("\\")[-1]
        html = open(file_path, encoding="utf-8").read()

        soup = BeautifulSoup(html, 'html.parser')

        elements = ['p', 'title', 'li', 'a',
                    'span', 'h1', 'h2', 'h3', 'h4', 'h5']
        extracted_elements = soup.find_all(elements)
        print(len(extracted_elements))
        print(file_name)
        for i in extracted_elements:
            if i.string != None and len(str(i.string).strip()) > 0:
                print("api_call")
                i.string.replace_with(
                    ts.translate_text(str(i.string).strip(), to_language="hi", translator="google"))
        outputPath = os.path.join(os.getcwd(), 'translated', file_name)
        with open(outputPath, "w") as f_output:
            f_output.write(soup.prettify("utf-8"))
    except Exception as error:
        print(error)
        print(file_path + " error occured ")   

# print(os.path.join(os.getcwd(), 'views', 'partials'))

file_list = list(
    filter(
        lambda x: x.endswith(".ejs"),
        get_all_files(path.join(getcwd(), "views")),
    )
)

wordDict = {}

translateGoogle(path.join(getcwd(),"views","aboutUs.ejs"));

# for idx in range(0, len(file_list)):
#     print(idx)
#     # print(file_list[idx])
#     # translateFile(file_list[idx], wordDict)
#     translateGoogle(file_list[idx])


# print(wordDict)
# json_path = path.join(getcwd(), "config", "locales", "en.json")
# with open(json_path, "w") as outfile:
#     json.dump(wordDict, outfile)
