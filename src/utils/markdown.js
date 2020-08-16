import MD from "react-markdown/with-html";

const renderers = {
  blockquote: (props) => (
    <aside className="typl8-pull-quote">
      <blockquote {...props} />
    </aside>
  ),
};

const Markdown = (props) => <MD renderers={renderers} {...props} />;

export default Markdown;
