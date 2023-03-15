from flask import Flask, request, render_template
from stories import *

app = Flask(__name__)

story = Story(
  ["place", "noun", "verb", "adjective", "plural_noun"],
  """Once upon a time in a long-ago {place}, there lived a
  large {adjective} {noun}. It loved to {verb} {plural_noun}."""
)

@app.route('/')
def home_page():
  return render_template('prompts.html', prompts=story.prompts)

@app.route('/madlib')
def madlib():
  answers = {}
  for prompt in story.prompts:
    answers[prompt] = request.args.get(prompt)
  result = story.generate(answers)
  return render_template('madlib.html', story=result)
