import { Tag } from "nocta";

function _c_t<T extends Nocta.HTMLTags>(tag: T, args: any[]): Nocta.Tag<T> {
  if (args.length) {
    if (Array.isArray(args[0])) {
      return Tag(tag, args[0]);
    } else {
      if (Array.isArray(args[1])) {
        return Tag(tag, args[0], args[1]);
      }
      return Tag(tag, args[0]);
    }
  }
  return Tag(tag);
}

/**
 * h1 - Creates h1 Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function h1(): Nocta.Tag<"h1">;
/**
 * @deprecated Use yandel package
 */
export function h1(props: Nocta.HTMLProps<"h1">): Nocta.Tag<"h1">;
/**
 * @deprecated Use yandel package
 */
export function h1(children: Nocta.NodeChildren): Nocta.Tag<"h1">;
/**
 * @deprecated Use yandel package
 */
export function h1(
  props: Nocta.HTMLProps<"h1">,
  children: Nocta.NodeChildren
): Nocta.Tag<"h1">;
/**
 * @deprecated Use yandel package
 */
export function h1(...args: any[]): Nocta.Tag<"h1"> {
  return _c_t("h1", args);
}
/**
 * h2 - Creates h2 Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function h2(): Nocta.Tag<"h2">;
/**
 * @deprecated Use yandel package
 */
export function h2(props: Nocta.HTMLProps<"h2">): Nocta.Tag<"h2">;
/**
 * @deprecated Use yandel package
 */
export function h2(children: Nocta.NodeChildren): Nocta.Tag<"h2">;
/**
 * @deprecated Use yandel package
 */
export function h2(
  props: Nocta.HTMLProps<"h2">,
  children: Nocta.NodeChildren
): Nocta.Tag<"h2">;
/**
 * @deprecated Use yandel package
 */
export function h2(...args: any[]): Nocta.Tag<"h2"> {
  return _c_t("h2", args);
}

/**
 * h3 - Creates h3 Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function h3(): Nocta.Tag<"h3">;
/**
 * @deprecated Use yandel package
 */
export function h3(props: Nocta.HTMLProps<"h3">): Nocta.Tag<"h3">;
/**
 * @deprecated Use yandel package
 */
export function h3(children: Nocta.NodeChildren): Nocta.Tag<"h3">;
/**
 * @deprecated Use yandel package
 */
export function h3(
  props: Nocta.HTMLProps<"h3">,
  children: Nocta.NodeChildren
): Nocta.Tag<"h3">;
/**
 * @deprecated Use yandel package
 */
export function h3(...args: any[]): Nocta.Tag<"h3"> {
  return _c_t("h3", args);
}
/**
 * h4 - Creates h4 Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function h4(): Nocta.Tag<"h4">;
/**
 * @deprecated Use yandel package
 */
export function h4(props: Nocta.HTMLProps<"h4">): Nocta.Tag<"h4">;
/**
 * @deprecated Use yandel package
 */
export function h4(children: Nocta.NodeChildren): Nocta.Tag<"h4">;
/**
 * @deprecated Use yandel package
 */
export function h4(
  props: Nocta.HTMLProps<"h4">,
  children: Nocta.NodeChildren
): Nocta.Tag<"h4">;
/**
 * @deprecated Use yandel package
 */
export function h4(...args: any[]): Nocta.Tag<"h4"> {
  return _c_t("h4", args);
}
/**
 * h5 - Creates h5 Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function h5(): Nocta.Tag<"h5">;
/**
 * @deprecated Use yandel package
 */
export function h5(props: Nocta.HTMLProps<"h5">): Nocta.Tag<"h5">;
/**
 * @deprecated Use yandel package
 */
export function h5(children: Nocta.NodeChildren): Nocta.Tag<"h5">;
/**
 * @deprecated Use yandel package
 */
export function h5(
  props: Nocta.HTMLProps<"h5">,
  children: Nocta.NodeChildren
): Nocta.Tag<"h5">;
/**
 * @deprecated Use yandel package
 */
export function h5(...args: any[]): Nocta.Tag<"h5"> {
  return _c_t("h5", args);
}
/**
 * h6 - Creates h6 Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function h6(): Nocta.Tag<"h6">;
/**
 * @deprecated Use yandel package
 */
export function h6(props: Nocta.HTMLProps<"h6">): Nocta.Tag<"h6">;
/**
 * @deprecated Use yandel package
 */
export function h6(children: Nocta.NodeChildren): Nocta.Tag<"h6">;
/**
 * @deprecated Use yandel package
 */
export function h6(
  props: Nocta.HTMLProps<"h6">,
  children: Nocta.NodeChildren
): Nocta.Tag<"h6">;
/**
 * @deprecated Use yandel package
 */
export function h6(...args: any[]): Nocta.Tag<"h6"> {
  return _c_t("h6", args);
}
/**
 * a - Creates a Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function a(): Nocta.Tag<"a">;
/**
 * @deprecated Use yandel package
 */
export function a(props: Nocta.HTMLProps<"a">): Nocta.Tag<"a">;
/**
 * @deprecated Use yandel package
 */
export function a(children: Nocta.NodeChildren): Nocta.Tag<"a">;
/**
 * @deprecated Use yandel package
 */
export function a(
  props: Nocta.HTMLProps<"a">,
  children: Nocta.NodeChildren
): Nocta.Tag<"a">;
/**
 * @deprecated Use yandel package
 */
export function a(...args: any[]): Nocta.Tag<"a"> {
  return _c_t("a", args);
}

/**
 * abbr - Creates abbr Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function abbr(): Nocta.Tag<"abbr">;
/**
 * @deprecated Use yandel package
 */
export function abbr(props: Nocta.HTMLProps<"abbr">): Nocta.Tag<"abbr">;
/**
 * @deprecated Use yandel package
 */
export function abbr(children: Nocta.NodeChildren): Nocta.Tag<"abbr">;
/**
 * @deprecated Use yandel package
 */
export function abbr(
  props: Nocta.HTMLProps<"abbr">,
  children: Nocta.NodeChildren
): Nocta.Tag<"abbr">;
/**
 * @deprecated Use yandel package
 */
export function abbr(...args: any[]): Nocta.Tag<"abbr"> {
  return _c_t("abbr", args);
}

/**
 * address - Creates address Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function address(): Nocta.Tag<"address">;
/**
 * @deprecated Use yandel package
 */
export function address(
  props: Nocta.HTMLProps<"address">
): Nocta.Tag<"address">;
/**
 * @deprecated Use yandel package
 */
export function address(children: Nocta.NodeChildren): Nocta.Tag<"address">;
/**
 * @deprecated Use yandel package
 */
export function address(
  props: Nocta.HTMLProps<"address">,
  children: Nocta.NodeChildren
): Nocta.Tag<"address">;
/**
 * @deprecated Use yandel package
 */
export function address(...args: any[]): Nocta.Tag<"address"> {
  return _c_t("address", args);
}

/**
 * area - Creates area Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function area(props?: Nocta.HTMLProps<"area">): Nocta.Tag<"area"> {
  return props ? Tag("area", props) : Tag("area");
}

/**
 * article - Creates article Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function article(): Nocta.Tag<"article">;
/**
 * @deprecated Use yandel package
 */
export function article(
  props: Nocta.HTMLProps<"article">
): Nocta.Tag<"article">;
/**
 * @deprecated Use yandel package
 */
export function article(children: Nocta.NodeChildren): Nocta.Tag<"article">;
/**
 * @deprecated Use yandel package
 */
export function article(
  props: Nocta.HTMLProps<"article">,
  children: Nocta.NodeChildren
): Nocta.Tag<"article">;
/**
 * @deprecated Use yandel package
 */
export function article(...args: any[]): Nocta.Tag<"article"> {
  return _c_t("article", args);
}

/**
 * aside - Creates aside Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function aside(): Nocta.Tag<"aside">;
/**
 * @deprecated Use yandel package
 */
export function aside(props: Nocta.HTMLProps<"aside">): Nocta.Tag<"aside">;
/**
 * @deprecated Use yandel package
 */
export function aside(children: Nocta.NodeChildren): Nocta.Tag<"aside">;
/**
 * @deprecated Use yandel package
 */
export function aside(
  props: Nocta.HTMLProps<"aside">,
  children: Nocta.NodeChildren
): Nocta.Tag<"aside">;
/**
 * @deprecated Use yandel package
 */
export function aside(...args: any[]): Nocta.Tag<"aside"> {
  return _c_t("aside", args);
}

/**
 * audio - Creates audio Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function audio(): Nocta.Tag<"audio">;
/**
 * @deprecated Use yandel package
 */
export function audio(props: Nocta.HTMLProps<"audio">): Nocta.Tag<"audio">;
/**
 * @deprecated Use yandel package
 */
export function audio(children: Nocta.NodeChildren): Nocta.Tag<"audio">;
/**
 * @deprecated Use yandel package
 */
export function audio(
  props: Nocta.HTMLProps<"audio">,
  children: Nocta.NodeChildren
): Nocta.Tag<"audio">;
/**
 * @deprecated Use yandel package
 */
export function audio(...args: any[]): Nocta.Tag<"audio"> {
  return _c_t("audio", args);
}

/**
 * b - Creates b Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function b(): Nocta.Tag<"b">;
/**
 * @deprecated Use yandel package
 */
export function b(props: Nocta.HTMLProps<"b">): Nocta.Tag<"b">;
/**
 * @deprecated Use yandel package
 */
export function b(children: Nocta.NodeChildren): Nocta.Tag<"b">;
/**
 * @deprecated Use yandel package
 */
export function b(
  props: Nocta.HTMLProps<"b">,
  children: Nocta.NodeChildren
): Nocta.Tag<"b">;
/**
 * @deprecated Use yandel package
 */
export function b(...args: any[]): Nocta.Tag<"b"> {
  return _c_t("b", args);
}

/**
 * base - Creates base Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function base(props?: Nocta.HTMLProps<"base">): Nocta.Tag<"base"> {
  return props ? Tag("base", props) : Tag("base");
}

/**
 * bdi - Creates bdi Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function bdi(): Nocta.Tag<"bdi">;
/**
 * @deprecated Use yandel package
 */
export function bdi(props: Nocta.HTMLProps<"bdi">): Nocta.Tag<"bdi">;
/**
 * @deprecated Use yandel package
 */
export function bdi(children: Nocta.NodeChildren): Nocta.Tag<"bdi">;
/**
 * @deprecated Use yandel package
 */
export function bdi(
  props: Nocta.HTMLProps<"bdi">,
  children: Nocta.NodeChildren
): Nocta.Tag<"bdi">;
/**
 * @deprecated Use yandel package
 */
export function bdi(...args: any[]): Nocta.Tag<"bdi"> {
  return _c_t("bdi", args);
}

/**
 * bdo - Creates bdo Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function bdo(): Nocta.Tag<"bdo">;
/**
 * @deprecated Use yandel package
 */
export function bdo(props: Nocta.HTMLProps<"bdo">): Nocta.Tag<"bdo">;
/**
 * @deprecated Use yandel package
 */
export function bdo(children: Nocta.NodeChildren): Nocta.Tag<"bdo">;
/**
 * @deprecated Use yandel package
 */
export function bdo(
  props: Nocta.HTMLProps<"bdo">,
  children: Nocta.NodeChildren
): Nocta.Tag<"bdo">;
/**
 * @deprecated Use yandel package
 */
export function bdo(...args: any[]): Nocta.Tag<"bdo"> {
  return _c_t("bdo", args);
}

/**
 * blockquote - Creates blockquote Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function blockquote(): Nocta.Tag<"blockquote">;
/**
 * @deprecated Use yandel package
 */
export function blockquote(
  props: Nocta.HTMLProps<"blockquote">
): Nocta.Tag<"blockquote">;
/**
 * @deprecated Use yandel package
 */
export function blockquote(
  children: Nocta.NodeChildren
): Nocta.Tag<"blockquote">;
/**
 * @deprecated Use yandel package
 */
export function blockquote(
  props: Nocta.HTMLProps<"blockquote">,
  children: Nocta.NodeChildren
): Nocta.Tag<"blockquote">;
/**
 * @deprecated Use yandel package
 */
export function blockquote(...args: any[]): Nocta.Tag<"blockquote"> {
  return _c_t("blockquote", args);
}

/**
 * body - Creates body Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function body(): Nocta.Tag<"body">;
/**
 * @deprecated Use yandel package
 */
export function body(props: Nocta.HTMLProps<"body">): Nocta.Tag<"body">;
/**
 * @deprecated Use yandel package
 */
export function body(children: Nocta.NodeChildren): Nocta.Tag<"body">;
/**
 * @deprecated Use yandel package
 */
export function body(
  props: Nocta.HTMLProps<"body">,
  children: Nocta.NodeChildren
): Nocta.Tag<"body">;
/**
 * @deprecated Use yandel package
 */
export function body(...args: any[]): Nocta.Tag<"body"> {
  return _c_t("body", args);
}

/**
 * br - Creates br Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function br(props?: Nocta.HTMLProps<"br">): Nocta.Tag<"br"> {
  return props ? Tag("br", props) : Tag("br");
}

/**
 * button - Creates button Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function button(): Nocta.Tag<"button">;
/**
 * @deprecated Use yandel package
 */
export function button(props: Nocta.HTMLProps<"button">): Nocta.Tag<"button">;
/**
 * @deprecated Use yandel package
 */
export function button(children: Nocta.NodeChildren): Nocta.Tag<"button">;
/**
 * @deprecated Use yandel package
 */
export function button(
  props: Nocta.HTMLProps<"button">,
  children: Nocta.NodeChildren
): Nocta.Tag<"button">;
/**
 * @deprecated Use yandel package
 */
export function button(...args: any[]): Nocta.Tag<"button"> {
  return _c_t("button", args);
}

/**
 * canvas - Creates canvas Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function canvas(): Nocta.Tag<"canvas">;
/**
 * @deprecated Use yandel package
 */
export function canvas(props: Nocta.HTMLProps<"canvas">): Nocta.Tag<"canvas">;
/**
 * @deprecated Use yandel package
 */
export function canvas(children: Nocta.NodeChildren): Nocta.Tag<"canvas">;
/**
 * @deprecated Use yandel package
 */
export function canvas(
  props: Nocta.HTMLProps<"canvas">,
  children: Nocta.NodeChildren
): Nocta.Tag<"canvas">;
/**
 * @deprecated Use yandel package
 */
export function canvas(...args: any[]): Nocta.Tag<"canvas"> {
  return _c_t("canvas", args);
}

/**
 * caption - Creates caption Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function caption(): Nocta.Tag<"caption">;
/**
 * @deprecated Use yandel package
 */
export function caption(
  props: Nocta.HTMLProps<"caption">
): Nocta.Tag<"caption">;
/**
 * @deprecated Use yandel package
 */
export function caption(children: Nocta.NodeChildren): Nocta.Tag<"caption">;
/**
 * @deprecated Use yandel package
 */
export function caption(
  props: Nocta.HTMLProps<"caption">,
  children: Nocta.NodeChildren
): Nocta.Tag<"caption">;
/**
 * @deprecated Use yandel package
 */
export function caption(...args: any[]): Nocta.Tag<"caption"> {
  return _c_t("caption", args);
}

/**
 * cite - Creates cite Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function cite(): Nocta.Tag<"cite">;
/**
 * @deprecated Use yandel package
 */
export function cite(props: Nocta.HTMLProps<"cite">): Nocta.Tag<"cite">;
/**
 * @deprecated Use yandel package
 */
export function cite(children: Nocta.NodeChildren): Nocta.Tag<"cite">;
/**
 * @deprecated Use yandel package
 */
export function cite(
  props: Nocta.HTMLProps<"cite">,
  children: Nocta.NodeChildren
): Nocta.Tag<"cite">;
/**
 * @deprecated Use yandel package
 */
export function cite(...args: any[]): Nocta.Tag<"cite"> {
  return _c_t("cite", args);
}

/**
 * code - Creates code Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function code(): Nocta.Tag<"code">;
/**
 * @deprecated Use yandel package
 */
export function code(props: Nocta.HTMLProps<"code">): Nocta.Tag<"code">;
/**
 * @deprecated Use yandel package
 */
export function code(children: Nocta.NodeChildren): Nocta.Tag<"code">;
/**
 * @deprecated Use yandel package
 */
export function code(
  props: Nocta.HTMLProps<"code">,
  children: Nocta.NodeChildren
): Nocta.Tag<"code">;
/**
 * @deprecated Use yandel package
 */
export function code(...args: any[]): Nocta.Tag<"code"> {
  return _c_t("code", args);
}

/**
 * col - Creates col Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function col(props?: Nocta.HTMLProps<"col">): Nocta.Tag<"col"> {
  return props ? Tag("col", props) : Tag("col");
}

/**
 * colgroup - Creates colgroup Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function colgroup(): Nocta.Tag<"colgroup">;
/**
 * @deprecated Use yandel package
 */
export function colgroup(
  props: Nocta.HTMLProps<"colgroup">
): Nocta.Tag<"colgroup">;
/**
 * @deprecated Use yandel package
 */
export function colgroup(children: Nocta.NodeChildren): Nocta.Tag<"colgroup">;
/**
 * @deprecated Use yandel package
 */
export function colgroup(
  props: Nocta.HTMLProps<"colgroup">,
  children: Nocta.NodeChildren
): Nocta.Tag<"colgroup">;
/**
 * @deprecated Use yandel package
 */
export function colgroup(...args: any[]): Nocta.Tag<"colgroup"> {
  return _c_t("colgroup", args);
}

/**
 * data - Creates data Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function data(): Nocta.Tag<"data">;
/**
 * @deprecated Use yandel package
 */
export function data(props: Nocta.HTMLProps<"data">): Nocta.Tag<"data">;
/**
 * @deprecated Use yandel package
 */
export function data(children: Nocta.NodeChildren): Nocta.Tag<"data">;
/**
 * @deprecated Use yandel package
 */
export function data(
  props: Nocta.HTMLProps<"data">,
  children: Nocta.NodeChildren
): Nocta.Tag<"data">;
/**
 * @deprecated Use yandel package
 */
export function data(...args: any[]): Nocta.Tag<"data"> {
  return _c_t("data", args);
}

/**
 * datalist - Creates datalist Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function datalist(): Nocta.Tag<"datalist">;
/**
 * @deprecated Use yandel package
 */
export function datalist(
  props: Nocta.HTMLProps<"datalist">
): Nocta.Tag<"datalist">;
/**
 * @deprecated Use yandel package
 */
export function datalist(children: Nocta.NodeChildren): Nocta.Tag<"datalist">;
/**
 * @deprecated Use yandel package
 */
export function datalist(
  props: Nocta.HTMLProps<"datalist">,
  children: Nocta.NodeChildren
): Nocta.Tag<"datalist">;
/**
 * @deprecated Use yandel package
 */
export function datalist(...args: any[]): Nocta.Tag<"datalist"> {
  return _c_t("datalist", args);
}

/**
 * dd - Creates dd Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function dd(): Nocta.Tag<"dd">;
/**
 * @deprecated Use yandel package
 */
export function dd(props: Nocta.HTMLProps<"dd">): Nocta.Tag<"dd">;
/**
 * @deprecated Use yandel package
 */
export function dd(children: Nocta.NodeChildren): Nocta.Tag<"dd">;
/**
 * @deprecated Use yandel package
 */
export function dd(
  props: Nocta.HTMLProps<"dd">,
  children: Nocta.NodeChildren
): Nocta.Tag<"dd">;
/**
 * @deprecated Use yandel package
 */
export function dd(...args: any[]): Nocta.Tag<"dd"> {
  return _c_t("dd", args);
}

/**
 * del - Creates del Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function del(): Nocta.Tag<"del">;
/**
 * @deprecated Use yandel package
 */
export function del(props: Nocta.HTMLProps<"del">): Nocta.Tag<"del">;
/**
 * @deprecated Use yandel package
 */
export function del(children: Nocta.NodeChildren): Nocta.Tag<"del">;
/**
 * @deprecated Use yandel package
 */
export function del(
  props: Nocta.HTMLProps<"del">,
  children: Nocta.NodeChildren
): Nocta.Tag<"del">;
/**
 * @deprecated Use yandel package
 */
export function del(...args: any[]): Nocta.Tag<"del"> {
  return _c_t("del", args);
}

/**
 * details - Creates details Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function details(): Nocta.Tag<"details">;
/**
 * @deprecated Use yandel package
 */
export function details(
  props: Nocta.HTMLProps<"details">
): Nocta.Tag<"details">;
/**
 * @deprecated Use yandel package
 */
export function details(children: Nocta.NodeChildren): Nocta.Tag<"details">;
/**
 * @deprecated Use yandel package
 */
export function details(
  props: Nocta.HTMLProps<"details">,
  children: Nocta.NodeChildren
): Nocta.Tag<"details">;
/**
 * @deprecated Use yandel package
 */
export function details(...args: any[]): Nocta.Tag<"details"> {
  return _c_t("details", args);
}

/**
 * dfn - Creates dfn Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function dfn(): Nocta.Tag<"dfn">;
/**
 * @deprecated Use yandel package
 */
export function dfn(props: Nocta.HTMLProps<"dfn">): Nocta.Tag<"dfn">;
/**
 * @deprecated Use yandel package
 */
export function dfn(children: Nocta.NodeChildren): Nocta.Tag<"dfn">;
/**
 * @deprecated Use yandel package
 */
export function dfn(
  props: Nocta.HTMLProps<"dfn">,
  children: Nocta.NodeChildren
): Nocta.Tag<"dfn">;
/**
 * @deprecated Use yandel package
 */
export function dfn(...args: any[]): Nocta.Tag<"dfn"> {
  return _c_t("dfn", args);
}

/**
 * dialog - Creates dialog Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function dialog(): Nocta.Tag<"dialog">;
/**
 * @deprecated Use yandel package
 */
export function dialog(props: Nocta.HTMLProps<"dialog">): Nocta.Tag<"dialog">;
/**
 * @deprecated Use yandel package
 */
export function dialog(children: Nocta.NodeChildren): Nocta.Tag<"dialog">;
/**
 * @deprecated Use yandel package
 */
export function dialog(
  props: Nocta.HTMLProps<"dialog">,
  children: Nocta.NodeChildren
): Nocta.Tag<"dialog">;
/**
 * @deprecated Use yandel package
 */
export function dialog(...args: any[]): Nocta.Tag<"dialog"> {
  return _c_t("dialog", args);
}

/**
 * div - Creates div Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function div(): Nocta.Tag<"div">;
/**
 * @deprecated Use yandel package
 */
export function div(props: Nocta.HTMLProps<"div">): Nocta.Tag<"div">;
/**
 * @deprecated Use yandel package
 */
export function div(children: Nocta.NodeChildren): Nocta.Tag<"div">;
/**
 * @deprecated Use yandel package
 */
export function div(
  props: Nocta.HTMLProps<"div">,
  children: Nocta.NodeChildren
): Nocta.Tag<"div">;
/**
 * @deprecated Use yandel package
 */
export function div(...args: any[]): Nocta.Tag<"div"> {
  return _c_t("div", args);
}

/**
 * dl - Creates dl Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function dl(): Nocta.Tag<"dl">;
/**
 * @deprecated Use yandel package
 */
export function dl(props: Nocta.HTMLProps<"dl">): Nocta.Tag<"dl">;
/**
 * @deprecated Use yandel package
 */
export function dl(children: Nocta.NodeChildren): Nocta.Tag<"dl">;
/**
 * @deprecated Use yandel package
 */
export function dl(
  props: Nocta.HTMLProps<"dl">,
  children: Nocta.NodeChildren
): Nocta.Tag<"dl">;
/**
 * @deprecated Use yandel package
 */
export function dl(...args: any[]): Nocta.Tag<"dl"> {
  return _c_t("dl", args);
}

/**
 * dt - Creates dt Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function dt(): Nocta.Tag<"dt">;
/**
 * @deprecated Use yandel package
 */
export function dt(props: Nocta.HTMLProps<"dt">): Nocta.Tag<"dt">;
/**
 * @deprecated Use yandel package
 */
export function dt(children: Nocta.NodeChildren): Nocta.Tag<"dt">;
/**
 * @deprecated Use yandel package
 */
export function dt(
  props: Nocta.HTMLProps<"dt">,
  children: Nocta.NodeChildren
): Nocta.Tag<"dt">;
/**
 * @deprecated Use yandel package
 */
export function dt(...args: any[]): Nocta.Tag<"dt"> {
  return _c_t("dt", args);
}

/**
 * em - Creates em Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function em(): Nocta.Tag<"em">;
/**
 * @deprecated Use yandel package
 */
export function em(props: Nocta.HTMLProps<"em">): Nocta.Tag<"em">;
/**
 * @deprecated Use yandel package
 */
export function em(children: Nocta.NodeChildren): Nocta.Tag<"em">;
/**
 * @deprecated Use yandel package
 */
export function em(
  props: Nocta.HTMLProps<"em">,
  children: Nocta.NodeChildren
): Nocta.Tag<"em">;
/**
 * @deprecated Use yandel package
 */
export function em(...args: any[]): Nocta.Tag<"em"> {
  return _c_t("em", args);
}

/**
 * embed - Creates embed Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function embed(props: Nocta.HTMLProps<"embed">): Nocta.Tag<"embed"> {
  return props ? Tag("embed", props) : Tag("embed");
}

/**
 * fieldset - Creates fieldset Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function fieldset(): Nocta.Tag<"fieldset">;
/**
 * @deprecated Use yandel package
 */
export function fieldset(
  props: Nocta.HTMLProps<"fieldset">
): Nocta.Tag<"fieldset">;
/**
 * @deprecated Use yandel package
 */
export function fieldset(children: Nocta.NodeChildren): Nocta.Tag<"fieldset">;
/**
 * @deprecated Use yandel package
 */
export function fieldset(
  props: Nocta.HTMLProps<"fieldset">,
  children: Nocta.NodeChildren
): Nocta.Tag<"fieldset">;
/**
 * @deprecated Use yandel package
 */
export function fieldset(...args: any[]): Nocta.Tag<"fieldset"> {
  return _c_t("fieldset", args);
}

/**
 * figcaption - Creates figcaption Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function figcaption(): Nocta.Tag<"figcaption">;
/**
 * @deprecated Use yandel package
 */
export function figcaption(
  props: Nocta.HTMLProps<"figcaption">
): Nocta.Tag<"figcaption">;
/**
 * @deprecated Use yandel package
 */
export function figcaption(
  children: Nocta.NodeChildren
): Nocta.Tag<"figcaption">;
/**
 * @deprecated Use yandel package
 */
export function figcaption(
  props: Nocta.HTMLProps<"figcaption">,
  children: Nocta.NodeChildren
): Nocta.Tag<"figcaption">;
/**
 * @deprecated Use yandel package
 */
export function figcaption(...args: any[]): Nocta.Tag<"figcaption"> {
  return _c_t("figcaption", args);
}

/**
 * figure - Creates figure Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function figure(): Nocta.Tag<"figure">;
/**
 * @deprecated Use yandel package
 */
export function figure(props: Nocta.HTMLProps<"figure">): Nocta.Tag<"figure">;
/**
 * @deprecated Use yandel package
 */
export function figure(children: Nocta.NodeChildren): Nocta.Tag<"figure">;
/**
 * @deprecated Use yandel package
 */
export function figure(
  props: Nocta.HTMLProps<"figure">,
  children: Nocta.NodeChildren
): Nocta.Tag<"figure">;
/**
 * @deprecated Use yandel package
 */
export function figure(...args: any[]): Nocta.Tag<"figure"> {
  return _c_t("figure", args);
}

/**
 * footer - Creates footer Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function footer(): Nocta.Tag<"footer">;
/**
 * @deprecated Use yandel package
 */
export function footer(props: Nocta.HTMLProps<"footer">): Nocta.Tag<"footer">;
/**
 * @deprecated Use yandel package
 */
export function footer(children: Nocta.NodeChildren): Nocta.Tag<"footer">;
/**
 * @deprecated Use yandel package
 */
export function footer(
  props: Nocta.HTMLProps<"footer">,
  children: Nocta.NodeChildren
): Nocta.Tag<"footer">;
/**
 * @deprecated Use yandel package
 */
export function footer(...args: any[]): Nocta.Tag<"footer"> {
  return _c_t("footer", args);
}

/**
 * form - Creates form Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function form(): Nocta.Tag<"form">;
/**
 * @deprecated Use yandel package
 */
export function form(props: Nocta.HTMLProps<"form">): Nocta.Tag<"form">;
/**
 * @deprecated Use yandel package
 */
export function form(children: Nocta.NodeChildren): Nocta.Tag<"form">;
/**
 * @deprecated Use yandel package
 */
export function form(
  props: Nocta.HTMLProps<"form">,
  children: Nocta.NodeChildren
): Nocta.Tag<"form">;
/**
 * @deprecated Use yandel package
 */
export function form(...args: any[]): Nocta.Tag<"form"> {
  return _c_t("form", args);
}

/**
 * head - Creates head Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function head(): Nocta.Tag<"head">;
/**
 * @deprecated Use yandel package
 */
export function head(props: Nocta.HTMLProps<"head">): Nocta.Tag<"head">;
/**
 * @deprecated Use yandel package
 */
export function head(children: Nocta.NodeChildren): Nocta.Tag<"head">;
/**
 * @deprecated Use yandel package
 */
export function head(
  props: Nocta.HTMLProps<"head">,
  children: Nocta.NodeChildren
): Nocta.Tag<"head">;
/**
 * @deprecated Use yandel package
 */
export function head(...args: any[]): Nocta.Tag<"head"> {
  return _c_t("head", args);
}

/**
 * header - Creates header Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function header(): Nocta.Tag<"header">;
/**
 * @deprecated Use yandel package
 */
export function header(props: Nocta.HTMLProps<"header">): Nocta.Tag<"header">;
/**
 * @deprecated Use yandel package
 */
export function header(children: Nocta.NodeChildren): Nocta.Tag<"header">;
/**
 * @deprecated Use yandel package
 */
export function header(
  props: Nocta.HTMLProps<"header">,
  children: Nocta.NodeChildren
): Nocta.Tag<"header">;
/**
 * @deprecated Use yandel package
 */
export function header(...args: any[]): Nocta.Tag<"header"> {
  return _c_t("header", args);
}

/**
 * hgroup - Creates hgroup Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function hgroup(): Nocta.Tag<"hgroup">;
/**
 * @deprecated Use yandel package
 */
export function hgroup(props: Nocta.HTMLProps<"hgroup">): Nocta.Tag<"hgroup">;
/**
 * @deprecated Use yandel package
 */
export function hgroup(children: Nocta.NodeChildren): Nocta.Tag<"hgroup">;
/**
 * @deprecated Use yandel package
 */
export function hgroup(
  props: Nocta.HTMLProps<"hgroup">,
  children: Nocta.NodeChildren
): Nocta.Tag<"hgroup">;
/**
 * @deprecated Use yandel package
 */
export function hgroup(...args: any[]): Nocta.Tag<"hgroup"> {
  return _c_t("hgroup", args);
}

/**
 * hr - Creates hr Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function hr(props: Nocta.HTMLProps<"hr">): Nocta.Tag<"hr"> {
  return props ? Tag("hr", props) : Tag("hr");
}

/**
 * html - Creates html Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function html(): Nocta.Tag<"html">;
/**
 * @deprecated Use yandel package
 */
export function html(props: Nocta.HTMLProps<"html">): Nocta.Tag<"html">;
/**
 * @deprecated Use yandel package
 */
export function html(children: Nocta.NodeChildren): Nocta.Tag<"html">;
/**
 * @deprecated Use yandel package
 */
export function html(
  props: Nocta.HTMLProps<"html">,
  children: Nocta.NodeChildren
): Nocta.Tag<"html">;
/**
 * @deprecated Use yandel package
 */
export function html(...args: any[]): Nocta.Tag<"html"> {
  return _c_t("html", args);
}

/**
 * i - Creates i Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function i(): Nocta.Tag<"i">;
/**
 * @deprecated Use yandel package
 */
export function i(props: Nocta.HTMLProps<"i">): Nocta.Tag<"i">;
/**
 * @deprecated Use yandel package
 */
export function i(children: Nocta.NodeChildren): Nocta.Tag<"i">;
/**
 * @deprecated Use yandel package
 */
export function i(
  props: Nocta.HTMLProps<"i">,
  children: Nocta.NodeChildren
): Nocta.Tag<"i">;
/**
 * @deprecated Use yandel package
 */
export function i(...args: any[]): Nocta.Tag<"i"> {
  return _c_t("i", args);
}

/**
 * iframe - Creates iframe Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function iframe(): Nocta.Tag<"iframe">;
/**
 * @deprecated Use yandel package
 */
export function iframe(props: Nocta.HTMLProps<"iframe">): Nocta.Tag<"iframe">;
/**
 * @deprecated Use yandel package
 */
export function iframe(children: Nocta.NodeChildren): Nocta.Tag<"iframe">;
/**
 * @deprecated Use yandel package
 */
export function iframe(
  props: Nocta.HTMLProps<"iframe">,
  children: Nocta.NodeChildren
): Nocta.Tag<"iframe">;
/**
 * @deprecated Use yandel package
 */
export function iframe(...args: any[]): Nocta.Tag<"iframe"> {
  return _c_t("iframe", args);
}

/**
 * img - Creates img Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function img(props: Nocta.HTMLProps<"img">): Nocta.Tag<"img"> {
  return props ? Tag("img", props) : Tag("img");
}

/**
 * input - Creates input Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function input(props?: Nocta.HTMLProps<"input">): Nocta.Tag<"input"> {
  return props ? Tag("input", props) : Tag("input");
}

/**
 * ins - Creates ins Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function ins(): Nocta.Tag<"ins">;
/**
 * @deprecated Use yandel package
 */
export function ins(props: Nocta.HTMLProps<"ins">): Nocta.Tag<"ins">;
/**
 * @deprecated Use yandel package
 */
export function ins(children: Nocta.NodeChildren): Nocta.Tag<"ins">;
/**
 * @deprecated Use yandel package
 */
export function ins(
  props: Nocta.HTMLProps<"ins">,
  children: Nocta.NodeChildren
): Nocta.Tag<"ins">;
/**
 * @deprecated Use yandel package
 */
export function ins(...args: any[]): Nocta.Tag<"ins"> {
  return _c_t("ins", args);
}

/**
 * kbd - Creates kbd Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function kbd(): Nocta.Tag<"kbd">;
/**
 * @deprecated Use yandel package
 */
export function kbd(props: Nocta.HTMLProps<"kbd">): Nocta.Tag<"kbd">;
/**
 * @deprecated Use yandel package
 */
export function kbd(children: Nocta.NodeChildren): Nocta.Tag<"kbd">;
/**
 * @deprecated Use yandel package
 */
export function kbd(
  props: Nocta.HTMLProps<"kbd">,
  children: Nocta.NodeChildren
): Nocta.Tag<"kbd">;
/**
 * @deprecated Use yandel package
 */
export function kbd(...args: any[]): Nocta.Tag<"kbd"> {
  return _c_t("kbd", args);
}

/**
 * label - Creates label Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function label(): Nocta.Tag<"label">;
/**
 * @deprecated Use yandel package
 */
export function label(props: Nocta.HTMLProps<"label">): Nocta.Tag<"label">;
/**
 * @deprecated Use yandel package
 */
export function label(children: Nocta.NodeChildren): Nocta.Tag<"label">;
/**
 * @deprecated Use yandel package
 */
export function label(
  props: Nocta.HTMLProps<"label">,
  children: Nocta.NodeChildren
): Nocta.Tag<"label">;
/**
 * @deprecated Use yandel package
 */
export function label(...args: any[]): Nocta.Tag<"label"> {
  return _c_t("label", args);
}

/**
 * legend - Creates legend Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function legend(): Nocta.Tag<"legend">;
/**
 * @deprecated Use yandel package
 */
export function legend(props: Nocta.HTMLProps<"legend">): Nocta.Tag<"legend">;
/**
 * @deprecated Use yandel package
 */
export function legend(children: Nocta.NodeChildren): Nocta.Tag<"legend">;
/**
 * @deprecated Use yandel package
 */
export function legend(
  props: Nocta.HTMLProps<"legend">,
  children: Nocta.NodeChildren
): Nocta.Tag<"legend">;
/**
 * @deprecated Use yandel package
 */
export function legend(...args: any[]): Nocta.Tag<"legend"> {
  return _c_t("legend", args);
}

/**
 * li - Creates li Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function li(): Nocta.Tag<"li">;
/**
 * @deprecated Use yandel package
 */
export function li(props: Nocta.HTMLProps<"li">): Nocta.Tag<"li">;
/**
 * @deprecated Use yandel package
 */
export function li(children: Nocta.NodeChildren): Nocta.Tag<"li">;
/**
 * @deprecated Use yandel package
 */
export function li(
  props: Nocta.HTMLProps<"li">,
  children: Nocta.NodeChildren
): Nocta.Tag<"li">;
/**
 * @deprecated Use yandel package
 */
export function li(...args: any[]): Nocta.Tag<"li"> {
  return _c_t("li", args);
}

/**
 * link - Creates link Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function link(props?: Nocta.HTMLProps<"link">): Nocta.Tag<"link"> {
  return props ? Tag("link", props) : Tag("link");
}

/**
 * main - Creates main Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function main(): Nocta.Tag<"main">;
/**
 * @deprecated Use yandel package
 */
export function main(props: Nocta.HTMLProps<"main">): Nocta.Tag<"main">;
/**
 * @deprecated Use yandel package
 */
export function main(children: Nocta.NodeChildren): Nocta.Tag<"main">;
/**
 * @deprecated Use yandel package
 */
export function main(
  props: Nocta.HTMLProps<"main">,
  children: Nocta.NodeChildren
): Nocta.Tag<"main">;
/**
 * @deprecated Use yandel package
 */
export function main(...args: any[]): Nocta.Tag<"main"> {
  return _c_t("main", args);
}

/**
 * map - Creates map Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function map(): Nocta.Tag<"map">;
/**
 * @deprecated Use yandel package
 */
export function map(props: Nocta.HTMLProps<"map">): Nocta.Tag<"map">;
/**
 * @deprecated Use yandel package
 */
export function map(children: Nocta.NodeChildren): Nocta.Tag<"map">;
/**
 * @deprecated Use yandel package
 */
export function map(
  props: Nocta.HTMLProps<"map">,
  children: Nocta.NodeChildren
): Nocta.Tag<"map">;
/**
 * @deprecated Use yandel package
 */
export function map(...args: any[]): Nocta.Tag<"map"> {
  return _c_t("map", args);
}

/**
 * mark - Creates mark Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function mark(): Nocta.Tag<"mark">;
/**
 * @deprecated Use yandel package
 */
export function mark(props: Nocta.HTMLProps<"mark">): Nocta.Tag<"mark">;
/**
 * @deprecated Use yandel package
 */
export function mark(children: Nocta.NodeChildren): Nocta.Tag<"mark">;
/**
 * @deprecated Use yandel package
 */
export function mark(
  props: Nocta.HTMLProps<"mark">,
  children: Nocta.NodeChildren
): Nocta.Tag<"mark">;
/**
 * @deprecated Use yandel package
 */
export function mark(...args: any[]): Nocta.Tag<"mark"> {
  return _c_t("mark", args);
}

/**
 * menu - Creates menu Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function menu(): Nocta.Tag<"menu">;
/**
 * @deprecated Use yandel package
 */
export function menu(props: Nocta.HTMLProps<"menu">): Nocta.Tag<"menu">;
/**
 * @deprecated Use yandel package
 */
export function menu(children: Nocta.NodeChildren): Nocta.Tag<"menu">;
/**
 * @deprecated Use yandel package
 */
export function menu(
  props: Nocta.HTMLProps<"menu">,
  children: Nocta.NodeChildren
): Nocta.Tag<"menu">;
/**
 * @deprecated Use yandel package
 */
export function menu(...args: any[]): Nocta.Tag<"menu"> {
  return _c_t("menu", args);
}

/**
 * meta - Creates meta Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function meta(props: Nocta.HTMLProps<"meta">): Nocta.Tag<"meta"> {
  return props ? Tag("meta", props) : Tag("meta");
}

/**
 * meter - Creates meter Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function meter(): Nocta.Tag<"meter">;
/**
 * @deprecated Use yandel package
 */
export function meter(props: Nocta.HTMLProps<"meter">): Nocta.Tag<"meter">;
/**
 * @deprecated Use yandel package
 */
export function meter(children: Nocta.NodeChildren): Nocta.Tag<"meter">;
/**
 * @deprecated Use yandel package
 */
export function meter(
  props: Nocta.HTMLProps<"meter">,
  children: Nocta.NodeChildren
): Nocta.Tag<"meter">;
/**
 * @deprecated Use yandel package
 */
export function meter(...args: any[]): Nocta.Tag<"meter"> {
  return _c_t("meter", args);
}

/**
 * nav - Creates nav Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function nav(): Nocta.Tag<"nav">;
/**
 * @deprecated Use yandel package
 */
export function nav(props: Nocta.HTMLProps<"nav">): Nocta.Tag<"nav">;
/**
 * @deprecated Use yandel package
 */
export function nav(children: Nocta.NodeChildren): Nocta.Tag<"nav">;
/**
 * @deprecated Use yandel package
 */
export function nav(
  props: Nocta.HTMLProps<"nav">,
  children: Nocta.NodeChildren
): Nocta.Tag<"nav">;
/**
 * @deprecated Use yandel package
 */
export function nav(...args: any[]): Nocta.Tag<"nav"> {
  return _c_t("nav", args);
}

/**
 * noscript - Creates noscript Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function noscript(): Nocta.Tag<"noscript">;
/**
 * @deprecated Use yandel package
 */
export function noscript(
  props: Nocta.HTMLProps<"noscript">
): Nocta.Tag<"noscript">;
/**
 * @deprecated Use yandel package
 */
export function noscript(children: Nocta.NodeChildren): Nocta.Tag<"noscript">;
/**
 * @deprecated Use yandel package
 */
export function noscript(
  props: Nocta.HTMLProps<"noscript">,
  children: Nocta.NodeChildren
): Nocta.Tag<"noscript">;
/**
 * @deprecated Use yandel package
 */
export function noscript(...args: any[]): Nocta.Tag<"noscript"> {
  return _c_t("noscript", args);
}

/**
 * object - Creates object Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function object(): Nocta.Tag<"object">;
/**
 * @deprecated Use yandel package
 */
export function object(props: Nocta.HTMLProps<"object">): Nocta.Tag<"object">;
/**
 * @deprecated Use yandel package
 */
export function object(children: Nocta.NodeChildren): Nocta.Tag<"object">;
/**
 * @deprecated Use yandel package
 */
export function object(
  props: Nocta.HTMLProps<"object">,
  children: Nocta.NodeChildren
): Nocta.Tag<"object">;
/**
 * @deprecated Use yandel package
 */
export function object(...args: any[]): Nocta.Tag<"object"> {
  return _c_t("object", args);
}

/**
 * ol - Creates ol Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function ol(): Nocta.Tag<"ol">;
/**
 * @deprecated Use yandel package
 */
export function ol(props: Nocta.HTMLProps<"ol">): Nocta.Tag<"ol">;
/**
 * @deprecated Use yandel package
 */
export function ol(children: Nocta.NodeChildren): Nocta.Tag<"ol">;
/**
 * @deprecated Use yandel package
 */
export function ol(
  props: Nocta.HTMLProps<"ol">,
  children: Nocta.NodeChildren
): Nocta.Tag<"ol">;
/**
 * @deprecated Use yandel package
 */
export function ol(...args: any[]): Nocta.Tag<"ol"> {
  return _c_t("ol", args);
}

/**
 * optgroup - Creates optgroup Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function optgroup(): Nocta.Tag<"optgroup">;
/**
 * @deprecated Use yandel package
 */
export function optgroup(
  props: Nocta.HTMLProps<"optgroup">
): Nocta.Tag<"optgroup">;
/**
 * @deprecated Use yandel package
 */
export function optgroup(children: Nocta.NodeChildren): Nocta.Tag<"optgroup">;
/**
 * @deprecated Use yandel package
 */
export function optgroup(
  props: Nocta.HTMLProps<"optgroup">,
  children: Nocta.NodeChildren
): Nocta.Tag<"optgroup">;
/**
 * @deprecated Use yandel package
 */
export function optgroup(...args: any[]): Nocta.Tag<"optgroup"> {
  return _c_t("optgroup", args);
}

/**
 * option - Creates option Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function option(): Nocta.Tag<"option">;
/**
 * @deprecated Use yandel package
 */
export function option(props: Nocta.HTMLProps<"option">): Nocta.Tag<"option">;
/**
 * @deprecated Use yandel package
 */
export function option(children: Nocta.NodeChildren): Nocta.Tag<"option">;
/**
 * @deprecated Use yandel package
 */
export function option(
  props: Nocta.HTMLProps<"option">,
  children: Nocta.NodeChildren
): Nocta.Tag<"option">;
/**
 * @deprecated Use yandel package
 */
export function option(...args: any[]): Nocta.Tag<"option"> {
  return _c_t("option", args);
}

/**
 * output - Creates output Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function output(): Nocta.Tag<"output">;
/**
 * @deprecated Use yandel package
 */
export function output(props: Nocta.HTMLProps<"output">): Nocta.Tag<"output">;
/**
 * @deprecated Use yandel package
 */
export function output(children: Nocta.NodeChildren): Nocta.Tag<"output">;
/**
 * @deprecated Use yandel package
 */
export function output(
  props: Nocta.HTMLProps<"output">,
  children: Nocta.NodeChildren
): Nocta.Tag<"output">;
/**
 * @deprecated Use yandel package
 */
export function output(...args: any[]): Nocta.Tag<"output"> {
  return _c_t("output", args);
}

/**
 * p - Creates p Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function p(): Nocta.Tag<"p">;
/**
 * @deprecated Use yandel package
 */
export function p(props: Nocta.HTMLProps<"p">): Nocta.Tag<"p">;
/**
 * @deprecated Use yandel package
 */
export function p(children: Nocta.NodeChildren): Nocta.Tag<"p">;
/**
 * @deprecated Use yandel package
 */
export function p(
  props: Nocta.HTMLProps<"p">,
  children: Nocta.NodeChildren
): Nocta.Tag<"p">;
/**
 * @deprecated Use yandel package
 */
export function p(...args: any[]): Nocta.Tag<"p"> {
  return _c_t("p", args);
}

/**
 * picture - Creates picture Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function picture(): Nocta.Tag<"picture">;
/**
 * @deprecated Use yandel package
 */
export function picture(
  props: Nocta.HTMLProps<"picture">
): Nocta.Tag<"picture">;
/**
 * @deprecated Use yandel package
 */
export function picture(children: Nocta.NodeChildren): Nocta.Tag<"picture">;
/**
 * @deprecated Use yandel package
 */
export function picture(
  props: Nocta.HTMLProps<"picture">,
  children: Nocta.NodeChildren
): Nocta.Tag<"picture">;
/**
 * @deprecated Use yandel package
 */
export function picture(...args: any[]): Nocta.Tag<"picture"> {
  return _c_t("picture", args);
}

/**
 * pre - Creates pre Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function pre(): Nocta.Tag<"pre">;
/**
 * @deprecated Use yandel package
 */
export function pre(props: Nocta.HTMLProps<"pre">): Nocta.Tag<"pre">;
/**
 * @deprecated Use yandel package
 */
export function pre(children: Nocta.NodeChildren): Nocta.Tag<"pre">;
/**
 * @deprecated Use yandel package
 */
export function pre(
  props: Nocta.HTMLProps<"pre">,
  children: Nocta.NodeChildren
): Nocta.Tag<"pre">;
/**
 * @deprecated Use yandel package
 */
export function pre(...args: any[]): Nocta.Tag<"pre"> {
  return _c_t("pre", args);
}

/**
 * progress - Creates progress Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function progress(): Nocta.Tag<"progress">;
/**
 * @deprecated Use yandel package
 */
export function progress(
  props: Nocta.HTMLProps<"progress">
): Nocta.Tag<"progress">;
/**
 * @deprecated Use yandel package
 */
export function progress(children: Nocta.NodeChildren): Nocta.Tag<"progress">;
/**
 * @deprecated Use yandel package
 */
export function progress(
  props: Nocta.HTMLProps<"progress">,
  children: Nocta.NodeChildren
): Nocta.Tag<"progress">;
/**
 * @deprecated Use yandel package
 */
export function progress(...args: any[]): Nocta.Tag<"progress"> {
  return _c_t("progress", args);
}

/**
 * q - Creates q Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function q(): Nocta.Tag<"q">;
/**
 * @deprecated Use yandel package
 */
export function q(props: Nocta.HTMLProps<"q">): Nocta.Tag<"q">;
/**
 * @deprecated Use yandel package
 */
export function q(children: Nocta.NodeChildren): Nocta.Tag<"q">;
/**
 * @deprecated Use yandel package
 */
export function q(
  props: Nocta.HTMLProps<"q">,
  children: Nocta.NodeChildren
): Nocta.Tag<"q">;
/**
 * @deprecated Use yandel package
 */
export function q(...args: any[]): Nocta.Tag<"q"> {
  return _c_t("q", args);
}

/**
 * rp - Creates rp Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function rp(): Nocta.Tag<"rp">;
/**
 * @deprecated Use yandel package
 */
export function rp(props: Nocta.HTMLProps<"rp">): Nocta.Tag<"rp">;
/**
 * @deprecated Use yandel package
 */
export function rp(children: Nocta.NodeChildren): Nocta.Tag<"rp">;
/**
 * @deprecated Use yandel package
 */
export function rp(
  props: Nocta.HTMLProps<"rp">,
  children: Nocta.NodeChildren
): Nocta.Tag<"rp">;
/**
 * @deprecated Use yandel package
 */
export function rp(...args: any[]): Nocta.Tag<"rp"> {
  return _c_t("rp", args);
}

/**
 * rt - Creates rt Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function rt(): Nocta.Tag<"rt">;
/**
 * @deprecated Use yandel package
 */
export function rt(props: Nocta.HTMLProps<"rt">): Nocta.Tag<"rt">;
/**
 * @deprecated Use yandel package
 */
export function rt(children: Nocta.NodeChildren): Nocta.Tag<"rt">;
/**
 * @deprecated Use yandel package
 */
export function rt(
  props: Nocta.HTMLProps<"rt">,
  children: Nocta.NodeChildren
): Nocta.Tag<"rt">;
/**
 * @deprecated Use yandel package
 */
export function rt(...args: any[]): Nocta.Tag<"rt"> {
  return _c_t("rt", args);
}

/**
 * ruby - Creates ruby Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function ruby(): Nocta.Tag<"ruby">;
/**
 * @deprecated Use yandel package
 */
export function ruby(props: Nocta.HTMLProps<"ruby">): Nocta.Tag<"ruby">;
/**
 * @deprecated Use yandel package
 */
export function ruby(children: Nocta.NodeChildren): Nocta.Tag<"ruby">;
/**
 * @deprecated Use yandel package
 */
export function ruby(
  props: Nocta.HTMLProps<"ruby">,
  children: Nocta.NodeChildren
): Nocta.Tag<"ruby">;
/**
 * @deprecated Use yandel package
 */
export function ruby(...args: any[]): Nocta.Tag<"ruby"> {
  return _c_t("ruby", args);
}

/**
 * s - Creates s Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function s(): Nocta.Tag<"s">;
/**
 * @deprecated Use yandel package
 */
export function s(props: Nocta.HTMLProps<"s">): Nocta.Tag<"s">;
/**
 * @deprecated Use yandel package
 */
export function s(children: Nocta.NodeChildren): Nocta.Tag<"s">;
/**
 * @deprecated Use yandel package
 */
export function s(
  props: Nocta.HTMLProps<"s">,
  children: Nocta.NodeChildren
): Nocta.Tag<"s">;
/**
 * @deprecated Use yandel package
 */
export function s(...args: any[]): Nocta.Tag<"s"> {
  return _c_t("s", args);
}

/**
 * samp - Creates samp Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function samp(): Nocta.Tag<"samp">;
/**
 * @deprecated Use yandel package
 */
export function samp(props: Nocta.HTMLProps<"samp">): Nocta.Tag<"samp">;
/**
 * @deprecated Use yandel package
 */
export function samp(children: Nocta.NodeChildren): Nocta.Tag<"samp">;
/**
 * @deprecated Use yandel package
 */
export function samp(
  props: Nocta.HTMLProps<"samp">,
  children: Nocta.NodeChildren
): Nocta.Tag<"samp">;
/**
 * @deprecated Use yandel package
 */
export function samp(...args: any[]): Nocta.Tag<"samp"> {
  return _c_t("samp", args);
}

/**
 * script - Creates script Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function script(): Nocta.Tag<"script">;
/**
 * @deprecated Use yandel package
 */
export function script(props: Nocta.HTMLProps<"script">): Nocta.Tag<"script">;
/**
 * @deprecated Use yandel package
 */
export function script(children: Nocta.NodeChildren): Nocta.Tag<"script">;
/**
 * @deprecated Use yandel package
 */
export function script(
  props: Nocta.HTMLProps<"script">,
  children: Nocta.NodeChildren
): Nocta.Tag<"script">;
/**
 * @deprecated Use yandel package
 */
export function script(...args: any[]): Nocta.Tag<"script"> {
  return _c_t("script", args);
}

/**
 * search - Creates search Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function search(): Nocta.Tag<"search">;
/**
 * @deprecated Use yandel package
 */
export function search(props: Nocta.HTMLProps<"search">): Nocta.Tag<"search">;
/**
 * @deprecated Use yandel package
 */
export function search(children: Nocta.NodeChildren): Nocta.Tag<"search">;
/**
 * @deprecated Use yandel package
 */
export function search(
  props: Nocta.HTMLProps<"search">,
  children: Nocta.NodeChildren
): Nocta.Tag<"search">;
/**
 * @deprecated Use yandel package
 */
export function search(...args: any[]): Nocta.Tag<"search"> {
  return _c_t("search", args);
}

/**
 * section - Creates section Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function section(): Nocta.Tag<"section">;
/**
 * @deprecated Use yandel package
 */
export function section(
  props: Nocta.HTMLProps<"section">
): Nocta.Tag<"section">;
/**
 * @deprecated Use yandel package
 */
export function section(children: Nocta.NodeChildren): Nocta.Tag<"section">;
/**
 * @deprecated Use yandel package
 */
export function section(
  props: Nocta.HTMLProps<"section">,
  children: Nocta.NodeChildren
): Nocta.Tag<"section">;
/**
 * @deprecated Use yandel package
 */
export function section(...args: any[]): Nocta.Tag<"section"> {
  return _c_t("section", args);
}

/**
 * select - Creates select Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function select(): Nocta.Tag<"select">;
/**
 * @deprecated Use yandel package
 */
export function select(props: Nocta.HTMLProps<"select">): Nocta.Tag<"select">;
/**
 * @deprecated Use yandel package
 */
export function select(children: Nocta.NodeChildren): Nocta.Tag<"select">;
/**
 * @deprecated Use yandel package
 */
export function select(
  props: Nocta.HTMLProps<"select">,
  children: Nocta.NodeChildren
): Nocta.Tag<"select">;
/**
 * @deprecated Use yandel package
 */
export function select(...args: any[]): Nocta.Tag<"select"> {
  return _c_t("select", args);
}

/**
 * small - Creates small Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function small(): Nocta.Tag<"small">;
/**
 * @deprecated Use yandel package
 */
export function small(props: Nocta.HTMLProps<"small">): Nocta.Tag<"small">;
/**
 * @deprecated Use yandel package
 */
export function small(children: Nocta.NodeChildren): Nocta.Tag<"small">;
/**
 * @deprecated Use yandel package
 */
export function small(
  props: Nocta.HTMLProps<"small">,
  children: Nocta.NodeChildren
): Nocta.Tag<"small">;
/**
 * @deprecated Use yandel package
 */
export function small(...args: any[]): Nocta.Tag<"small"> {
  return _c_t("small", args);
}

/**
 * source - Creates source Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function source(props?: Nocta.HTMLProps<"source">): Nocta.Tag<"source"> {
  return props ? Tag("source", props) : Tag("source");
}

/**
 * span - Creates span Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function span(): Nocta.Tag<"span">;
/**
 * @deprecated Use yandel package
 */
export function span(props: Nocta.HTMLProps<"span">): Nocta.Tag<"span">;
/**
 * @deprecated Use yandel package
 */
export function span(children: Nocta.NodeChildren): Nocta.Tag<"span">;
/**
 * @deprecated Use yandel package
 */
export function span(
  props: Nocta.HTMLProps<"span">,
  children: Nocta.NodeChildren
): Nocta.Tag<"span">;
/**
 * @deprecated Use yandel package
 */
export function span(...args: any[]): Nocta.Tag<"span"> {
  return _c_t("span", args);
}

/**
 * strong - Creates strong Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function strong(): Nocta.Tag<"strong">;
/**
 * @deprecated Use yandel package
 */
export function strong(props: Nocta.HTMLProps<"strong">): Nocta.Tag<"strong">;
/**
 * @deprecated Use yandel package
 */
export function strong(children: Nocta.NodeChildren): Nocta.Tag<"strong">;
/**
 * @deprecated Use yandel package
 */
export function strong(
  props: Nocta.HTMLProps<"strong">,
  children: Nocta.NodeChildren
): Nocta.Tag<"strong">;
/**
 * @deprecated Use yandel package
 */
export function strong(...args: any[]): Nocta.Tag<"strong"> {
  return _c_t("strong", args);
}

/**
 * style - Creates style Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function style(): Nocta.Tag<"style">;
/**
 * @deprecated Use yandel package
 */
export function style(props: Nocta.HTMLProps<"style">): Nocta.Tag<"style">;
/**
 * @deprecated Use yandel package
 */
export function style(children: Nocta.NodeChildren): Nocta.Tag<"style">;
/**
 * @deprecated Use yandel package
 */
export function style(
  props: Nocta.HTMLProps<"style">,
  children: Nocta.NodeChildren
): Nocta.Tag<"style">;
/**
 * @deprecated Use yandel package
 */
export function style(...args: any[]): Nocta.Tag<"style"> {
  return _c_t("style", args);
}

/**
 * sub - Creates sub Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function sub(): Nocta.Tag<"sub">;
/**
 * @deprecated Use yandel package
 */
export function sub(props: Nocta.HTMLProps<"sub">): Nocta.Tag<"sub">;
/**
 * @deprecated Use yandel package
 */
export function sub(children: Nocta.NodeChildren): Nocta.Tag<"sub">;
/**
 * @deprecated Use yandel package
 */
export function sub(
  props: Nocta.HTMLProps<"sub">,
  children: Nocta.NodeChildren
): Nocta.Tag<"sub">;
/**
 * @deprecated Use yandel package
 */
export function sub(...args: any[]): Nocta.Tag<"sub"> {
  return _c_t("sub", args);
}

/**
 * summary - Creates summary Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function summary(): Nocta.Tag<"summary">;
/**
 * @deprecated Use yandel package
 */
export function summary(
  props: Nocta.HTMLProps<"summary">
): Nocta.Tag<"summary">;
/**
 * @deprecated Use yandel package
 */
export function summary(children: Nocta.NodeChildren): Nocta.Tag<"summary">;
/**
 * @deprecated Use yandel package
 */
export function summary(
  props: Nocta.HTMLProps<"summary">,
  children: Nocta.NodeChildren
): Nocta.Tag<"summary">;
/**
 * @deprecated Use yandel package
 */
export function summary(...args: any[]): Nocta.Tag<"summary"> {
  return _c_t("summary", args);
}

/**
 * sup - Creates sup Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function sup(): Nocta.Tag<"sup">;
/**
 * @deprecated Use yandel package
 */
export function sup(props: Nocta.HTMLProps<"sup">): Nocta.Tag<"sup">;
/**
 * @deprecated Use yandel package
 */
export function sup(children: Nocta.NodeChildren): Nocta.Tag<"sup">;
/**
 * @deprecated Use yandel package
 */
export function sup(
  props: Nocta.HTMLProps<"sup">,
  children: Nocta.NodeChildren
): Nocta.Tag<"sup">;
/**
 * @deprecated Use yandel package
 */
export function sup(...args: any[]): Nocta.Tag<"sup"> {
  return _c_t("sup", args);
}

/**
 * table - Creates table Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function table(): Nocta.Tag<"table">;
/**
 * @deprecated Use yandel package
 */
export function table(props: Nocta.HTMLProps<"table">): Nocta.Tag<"table">;
/**
 * @deprecated Use yandel package
 */
export function table(children: Nocta.NodeChildren): Nocta.Tag<"table">;
/**
 * @deprecated Use yandel package
 */
export function table(
  props: Nocta.HTMLProps<"table">,
  children: Nocta.NodeChildren
): Nocta.Tag<"table">;
/**
 * @deprecated Use yandel package
 */
export function table(...args: any[]): Nocta.Tag<"table"> {
  return _c_t("table", args);
}

/**
 * tbody - Creates tbody Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function tbody(): Nocta.Tag<"tbody">;
/**
 * @deprecated Use yandel package
 */
export function tbody(props: Nocta.HTMLProps<"tbody">): Nocta.Tag<"tbody">;
/**
 * @deprecated Use yandel package
 */
export function tbody(children: Nocta.NodeChildren): Nocta.Tag<"tbody">;
/**
 * @deprecated Use yandel package
 */
export function tbody(
  props: Nocta.HTMLProps<"tbody">,
  children: Nocta.NodeChildren
): Nocta.Tag<"tbody">;
/**
 * @deprecated Use yandel package
 */
export function tbody(...args: any[]): Nocta.Tag<"tbody"> {
  return _c_t("tbody", args);
}

/**
 * td - Creates td Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function td(): Nocta.Tag<"td">;
/**
 * @deprecated Use yandel package
 */
export function td(props: Nocta.HTMLProps<"td">): Nocta.Tag<"td">;
/**
 * @deprecated Use yandel package
 */
export function td(children: Nocta.NodeChildren): Nocta.Tag<"td">;
/**
 * @deprecated Use yandel package
 */
export function td(
  props: Nocta.HTMLProps<"td">,
  children: Nocta.NodeChildren
): Nocta.Tag<"td">;
/**
 * @deprecated Use yandel package
 */
export function td(...args: any[]): Nocta.Tag<"td"> {
  return _c_t("td", args);
}

/**
 * template - Creates template Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function template(): Nocta.Tag<"template">;
/**
 * @deprecated Use yandel package
 */
export function template(
  props: Nocta.HTMLProps<"template">
): Nocta.Tag<"template">;
/**
 * @deprecated Use yandel package
 */
export function template(children: Nocta.NodeChildren): Nocta.Tag<"template">;
/**
 * @deprecated Use yandel package
 */
export function template(
  props: Nocta.HTMLProps<"template">,
  children: Nocta.NodeChildren
): Nocta.Tag<"template">;
/**
 * @deprecated Use yandel package
 */
export function template(...args: any[]): Nocta.Tag<"template"> {
  return _c_t("template", args);
}

/**
 * textarea - Creates textarea Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function textarea(): Nocta.Tag<"textarea">;
/**
 * @deprecated Use yandel package
 */
export function textarea(
  props: Nocta.HTMLProps<"textarea">
): Nocta.Tag<"textarea">;
/**
 * @deprecated Use yandel package
 */
export function textarea(children: Nocta.NodeChildren): Nocta.Tag<"textarea">;
/**
 * @deprecated Use yandel package
 */
export function textarea(
  props: Nocta.HTMLProps<"textarea">,
  children: Nocta.NodeChildren
): Nocta.Tag<"textarea">;
/**
 * @deprecated Use yandel package
 */
export function textarea(...args: any[]): Nocta.Tag<"textarea"> {
  return _c_t("textarea", args);
}

/**
 * tfoot - Creates tfoot Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function tfoot(): Nocta.Tag<"tfoot">;
/**
 * @deprecated Use yandel package
 */
export function tfoot(props: Nocta.HTMLProps<"tfoot">): Nocta.Tag<"tfoot">;
/**
 * @deprecated Use yandel package
 */
export function tfoot(children: Nocta.NodeChildren): Nocta.Tag<"tfoot">;
/**
 * @deprecated Use yandel package
 */
export function tfoot(
  props: Nocta.HTMLProps<"tfoot">,
  children: Nocta.NodeChildren
): Nocta.Tag<"tfoot">;
/**
 * @deprecated Use yandel package
 */
export function tfoot(...args: any[]): Nocta.Tag<"tfoot"> {
  return _c_t("tfoot", args);
}

/**
 * th - Creates th Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function th(): Nocta.Tag<"th">;
/**
 * @deprecated Use yandel package
 */
export function th(props: Nocta.HTMLProps<"th">): Nocta.Tag<"th">;
/**
 * @deprecated Use yandel package
 */
export function th(children: Nocta.NodeChildren): Nocta.Tag<"th">;
/**
 * @deprecated Use yandel package
 */
export function th(
  props: Nocta.HTMLProps<"th">,
  children: Nocta.NodeChildren
): Nocta.Tag<"th">;
/**
 * @deprecated Use yandel package
 */
export function th(...args: any[]): Nocta.Tag<"th"> {
  return _c_t("th", args);
}

/**
 * thead - Creates thead Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function thead(): Nocta.Tag<"thead">;
/**
 * @deprecated Use yandel package
 */
export function thead(props: Nocta.HTMLProps<"thead">): Nocta.Tag<"thead">;
/**
 * @deprecated Use yandel package
 */
export function thead(children: Nocta.NodeChildren): Nocta.Tag<"thead">;
/**
 * @deprecated Use yandel package
 */
export function thead(
  props: Nocta.HTMLProps<"thead">,
  children: Nocta.NodeChildren
): Nocta.Tag<"thead">;
/**
 * @deprecated Use yandel package
 */
export function thead(...args: any[]): Nocta.Tag<"thead"> {
  return _c_t("thead", args);
}

/**
 * time - Creates time Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function time(): Nocta.Tag<"time">;
/**
 * @deprecated Use yandel package
 */
export function time(props: Nocta.HTMLProps<"time">): Nocta.Tag<"time">;
/**
 * @deprecated Use yandel package
 */
export function time(children: Nocta.NodeChildren): Nocta.Tag<"time">;
/**
 * @deprecated Use yandel package
 */
export function time(
  props: Nocta.HTMLProps<"time">,
  children: Nocta.NodeChildren
): Nocta.Tag<"time">;
/**
 * @deprecated Use yandel package
 */
export function time(...args: any[]): Nocta.Tag<"time"> {
  return _c_t("time", args);
}

/**
 * title - Creates title Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function title(): Nocta.Tag<"title">;
/**
 * @deprecated Use yandel package
 */
export function title(props: Nocta.HTMLProps<"title">): Nocta.Tag<"title">;
/**
 * @deprecated Use yandel package
 */
export function title(children: Nocta.NodeChildren): Nocta.Tag<"title">;
/**
 * @deprecated Use yandel package
 */
export function title(
  props: Nocta.HTMLProps<"title">,
  children: Nocta.NodeChildren
): Nocta.Tag<"title">;
/**
 * @deprecated Use yandel package
 */
export function title(...args: any[]): Nocta.Tag<"title"> {
  return _c_t("title", args);
}

/**
 * tr - Creates tr Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function tr(): Nocta.Tag<"tr">;
/**
 * @deprecated Use yandel package
 */
export function tr(props: Nocta.HTMLProps<"tr">): Nocta.Tag<"tr">;
/**
 * @deprecated Use yandel package
 */
export function tr(children: Nocta.NodeChildren): Nocta.Tag<"tr">;
/**
 * @deprecated Use yandel package
 */
export function tr(
  props: Nocta.HTMLProps<"tr">,
  children: Nocta.NodeChildren
): Nocta.Tag<"tr">;
/**
 * @deprecated Use yandel package
 */
export function tr(...args: any[]): Nocta.Tag<"tr"> {
  return _c_t("tr", args);
}

/**
 * track - Creates track Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function track(props?: Nocta.HTMLProps<"track">): Nocta.Tag<"track"> {
  return props ? Tag("track", props) : Tag("track");
}

/**
 * u - Creates u Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function u(): Nocta.Tag<"u">;
/**
 * @deprecated Use yandel package
 */
export function u(props: Nocta.HTMLProps<"u">): Nocta.Tag<"u">;
/**
 * @deprecated Use yandel package
 */
export function u(children: Nocta.NodeChildren): Nocta.Tag<"u">;
/**
 * @deprecated Use yandel package
 */
export function u(
  props: Nocta.HTMLProps<"u">,
  children: Nocta.NodeChildren
): Nocta.Tag<"u">;
/**
 * @deprecated Use yandel package
 */
export function u(...args: any[]): Nocta.Tag<"u"> {
  return _c_t("u", args);
}

/**
 * ul - Creates ul Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function ul(): Nocta.Tag<"ul">;
/**
 * @deprecated Use yandel package
 */
export function ul(props: Nocta.HTMLProps<"ul">): Nocta.Tag<"ul">;
/**
 * @deprecated Use yandel package
 */
export function ul(children: Nocta.NodeChildren): Nocta.Tag<"ul">;
/**
 * @deprecated Use yandel package
 */
export function ul(
  props: Nocta.HTMLProps<"ul">,
  children: Nocta.NodeChildren
): Nocta.Tag<"ul">;
/**
 * @deprecated Use yandel package
 */
export function ul(...args: any[]): Nocta.Tag<"ul"> {
  return _c_t("ul", args);
}

/**
 * video - Creates video Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function video(): Nocta.Tag<"video">;
/**
 * @deprecated Use yandel package
 */
export function video(props: Nocta.HTMLProps<"video">): Nocta.Tag<"video">;
/**
 * @deprecated Use yandel package
 */
export function video(children: Nocta.NodeChildren): Nocta.Tag<"video">;
/**
 * @deprecated Use yandel package
 */
export function video(
  props: Nocta.HTMLProps<"video">,
  children: Nocta.NodeChildren
): Nocta.Tag<"video">;
/**
 * @deprecated Use yandel package
 */
export function video(...args: any[]): Nocta.Tag<"video"> {
  return _c_t("video", args);
}

/**
 * wbr - Creates wbr Tag node
 */
/**
 * @deprecated Use yandel package
 */
export function wbr(props?: Nocta.HTMLProps<"wbr">): Nocta.Tag<"wbr"> {
  return props ? Tag("wbr", props) : Tag("wbr");
}
