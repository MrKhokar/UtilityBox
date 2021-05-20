import React from "react";
import marked from "marked";
import "./mark.min.css";
const projectName = "markdown-previewer";
// FreeCodeCamp projectName bind: DO NOT MODIFY ABOVE //
//Allows Line Breaks with Return Button
marked.setOptions({ breaks: true });
//Renders "code editing" to preview markdown
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return (
    `<a target="_blank" href="${href}">${text}` + "</a>"
  );
};
// Main React Component 'App'
class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: place };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(i) {
    this.setState({ markdown: i.target.value });
  }
  //Main render of <DIV>
  render() {
    return (
      <div id="app">
        <div>
          <div className="toolbar" text="Editor" />
          <Editor
            markdown={this.state.markdown}
            onChange={this.handleChange}
          />
        </div>
        <div id="box">
          <div className="toolbar" text="Previewer" />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}
// Markdown Editor Prop
const Editor = (props) => {
  return (
    <textarea
      id="editor"
      type="text"
      onChange={props.onChange}
      value={props.markdown}
    />
  );
};
// Markdown Previewer Prop
const Preview = (props) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, {
          renderer: renderer,
        }),
      }}
    />
  );
};
// Markdown Editor Default Text "Place"
const place = `# Sample H1 Title - React Markdown Previewer!

## Sample H2 sub-header
### Another H3 sub-sub header

Sample code, \`<div></div>\`, between backticks.

\`\`\`
// Sample Code Comment

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

Make text **bold**...
Or _italic_...
Or **_both!_**...
And ~~cross stuff out~~.

There's also [links](about_blank), and
> Block Quotes!

Sample table:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Yes. | Whatever.

- And lists.
  - Some bulleted.
     - With different indentation levels
        - that look like this.


1. And there are numbererd lists too.
1. Another number.
1. And embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
export default Previewer;
