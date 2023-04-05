const heading = React.createElement(
  'h1',
  {
    id: 'title',
  },
  'Namaste Everyone !'
);

const heading2 = React.createElement(
  'h2',
  {
    id: 'title2',
  },
  'Welcome to Basic of React .....'
);

const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading, heading2]
);

console.log(container);

const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside the root

root.render(container);