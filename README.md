# Nocta-Tags

This package provides an HTML Tags shorthand set for [`nocta`](https://www.npmjs.com/package/nocta) package.

# Deprecated

This package is deprecated. Use [Yandel](https://www.npmjs.com/package/yandel) package.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Add this package to your npm project as well as nocta:

```
npm install nocta-tags
```

## Usage

Use the HTML tags in your [`nocta`](https://www.npmjs.com/package/nocta) project:

```ts
import { div, button } from "nocta-tags";

const CartButton: Nocta.Template<Nocta.Tag<"div">> = () => {
  const handleClickCardButton = () => {
    console.log("Card button click");
  };
  return div(
    {
      style: {
        backgroundColor: "black",
      },
    },
    [
      button(
        {
          onclick: handleClickCardButton,
        },
        ["Add to cart"]
      ),
    ]
  );
};
```
