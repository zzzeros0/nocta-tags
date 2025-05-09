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
 * a
 * Creates a Tag node
 */
export function a(): Nocta.Tag<"a">;
export function a(props: Nocta.HTMLProps<"a">): Nocta.Tag<"a">;
export function a(children: Nocta.NodeChildren): Nocta.Tag<"a">;
export function a(
  props: Nocta.HTMLProps<"a">,
  children: Nocta.NodeChildren
): Nocta.Tag<"a">;
export function a(...args: any[]): Nocta.Tag<"a"> {
  return _c_t("a", args);
}

/**
 * abbr
 * Creates abbr Tag node
 */
export function abbr(): Nocta.Tag<"abbr">;
export function abbr(props: Nocta.HTMLProps<"abbr">): Nocta.Tag<"abbr">;
export function abbr(children: Nocta.NodeChildren): Nocta.Tag<"abbr">;
export function abbr(
  props: Nocta.HTMLProps<"abbr">,
  children: Nocta.NodeChildren
): Nocta.Tag<"abbr">;
export function abbr(...args: any[]): Nocta.Tag<"abbr"> {
  return _c_t("abbr", args);
}

/**
 * address
 * Creates address Tag node
 */
export function address(): Nocta.Tag<"address">;
export function address(
  props: Nocta.HTMLProps<"address">
): Nocta.Tag<"address">;
export function address(children: Nocta.NodeChildren): Nocta.Tag<"address">;
export function address(
  props: Nocta.HTMLProps<"address">,
  children: Nocta.NodeChildren
): Nocta.Tag<"address">;
export function address(...args: any[]): Nocta.Tag<"address"> {
  return _c_t("address", args);
}

/**
 * area
 * Creates area Tag node
 */
export function area(props?: Nocta.HTMLProps<"area">): Nocta.Tag<"area"> {
  return props ? Tag("area", props) : Tag("area");
}

/**
 * article
 * Creates article Tag node
 */
export function article(): Nocta.Tag<"article">;
export function article(
  props: Nocta.HTMLProps<"article">
): Nocta.Tag<"article">;
export function article(children: Nocta.NodeChildren): Nocta.Tag<"article">;
export function article(
  props: Nocta.HTMLProps<"article">,
  children: Nocta.NodeChildren
): Nocta.Tag<"article">;
export function article(...args: any[]): Nocta.Tag<"article"> {
  return _c_t("article", args);
}

/**
 * aside
 * Creates aside Tag node
 */
export function aside(): Nocta.Tag<"aside">;
export function aside(props: Nocta.HTMLProps<"aside">): Nocta.Tag<"aside">;
export function aside(children: Nocta.NodeChildren): Nocta.Tag<"aside">;
export function aside(
  props: Nocta.HTMLProps<"aside">,
  children: Nocta.NodeChildren
): Nocta.Tag<"aside">;
export function aside(...args: any[]): Nocta.Tag<"aside"> {
  return _c_t("aside", args);
}

/**
 * audio
 * Creates audio Tag node
 */
export function audio(): Nocta.Tag<"audio">;
export function audio(props: Nocta.HTMLProps<"audio">): Nocta.Tag<"audio">;
export function audio(children: Nocta.NodeChildren): Nocta.Tag<"audio">;
export function audio(
  props: Nocta.HTMLProps<"audio">,
  children: Nocta.NodeChildren
): Nocta.Tag<"audio">;
export function audio(...args: any[]): Nocta.Tag<"audio"> {
  return _c_t("audio", args);
}

/**
 * b
 * Creates b Tag node
 */
export function b(): Nocta.Tag<"b">;
export function b(props: Nocta.HTMLProps<"b">): Nocta.Tag<"b">;
export function b(children: Nocta.NodeChildren): Nocta.Tag<"b">;
export function b(
  props: Nocta.HTMLProps<"b">,
  children: Nocta.NodeChildren
): Nocta.Tag<"b">;
export function b(...args: any[]): Nocta.Tag<"b"> {
  return _c_t("b", args);
}

/**
 * base
 * Creates base Tag node
 */
export function base(props?: Nocta.HTMLProps<"base">): Nocta.Tag<"base"> {
  return props ? Tag("base", props) : Tag("base");
}

/**
 * bdi
 * Creates bdi Tag node
 */
export function bdi(): Nocta.Tag<"bdi">;
export function bdi(props: Nocta.HTMLProps<"bdi">): Nocta.Tag<"bdi">;
export function bdi(children: Nocta.NodeChildren): Nocta.Tag<"bdi">;
export function bdi(
  props: Nocta.HTMLProps<"bdi">,
  children: Nocta.NodeChildren
): Nocta.Tag<"bdi">;
export function bdi(...args: any[]): Nocta.Tag<"bdi"> {
  return _c_t("bdi", args);
}

/**
 * bdo
 * Creates bdo Tag node
 */
export function bdo(): Nocta.Tag<"bdo">;
export function bdo(props: Nocta.HTMLProps<"bdo">): Nocta.Tag<"bdo">;
export function bdo(children: Nocta.NodeChildren): Nocta.Tag<"bdo">;
export function bdo(
  props: Nocta.HTMLProps<"bdo">,
  children: Nocta.NodeChildren
): Nocta.Tag<"bdo">;
export function bdo(...args: any[]): Nocta.Tag<"bdo"> {
  return _c_t("bdo", args);
}

/**
 * blockquote
 * Creates blockquote Tag node
 */
export function blockquote(): Nocta.Tag<"blockquote">;
export function blockquote(
  props: Nocta.HTMLProps<"blockquote">
): Nocta.Tag<"blockquote">;
export function blockquote(
  children: Nocta.NodeChildren
): Nocta.Tag<"blockquote">;
export function blockquote(
  props: Nocta.HTMLProps<"blockquote">,
  children: Nocta.NodeChildren
): Nocta.Tag<"blockquote">;
export function blockquote(...args: any[]): Nocta.Tag<"blockquote"> {
  return _c_t("blockquote", args);
}

/**
 * body
 * Creates body Tag node
 */
export function body(): Nocta.Tag<"body">;
export function body(props: Nocta.HTMLProps<"body">): Nocta.Tag<"body">;
export function body(children: Nocta.NodeChildren): Nocta.Tag<"body">;
export function body(
  props: Nocta.HTMLProps<"body">,
  children: Nocta.NodeChildren
): Nocta.Tag<"body">;
export function body(...args: any[]): Nocta.Tag<"body"> {
  return _c_t("body", args);
}

/**
 * br
 * Creates br Tag node
 */
export function br(props?: Nocta.HTMLProps<"br">): Nocta.Tag<"br"> {
  return props ? Tag("br", props) : Tag("br");
}

/**
 * button
 * Creates button Tag node
 */
export function button(): Nocta.Tag<"button">;
export function button(props: Nocta.HTMLProps<"button">): Nocta.Tag<"button">;
export function button(children: Nocta.NodeChildren): Nocta.Tag<"button">;
export function button(
  props: Nocta.HTMLProps<"button">,
  children: Nocta.NodeChildren
): Nocta.Tag<"button">;
export function button(...args: any[]): Nocta.Tag<"button"> {
  return _c_t("button", args);
}

/**
 * canvas
 * Creates canvas Tag node
 */
export function canvas(): Nocta.Tag<"canvas">;
export function canvas(props: Nocta.HTMLProps<"canvas">): Nocta.Tag<"canvas">;
export function canvas(children: Nocta.NodeChildren): Nocta.Tag<"canvas">;
export function canvas(
  props: Nocta.HTMLProps<"canvas">,
  children: Nocta.NodeChildren
): Nocta.Tag<"canvas">;
export function canvas(...args: any[]): Nocta.Tag<"canvas"> {
  return _c_t("canvas", args);
}

/**
 * caption
 * Creates caption Tag node
 */
export function caption(): Nocta.Tag<"caption">;
export function caption(
  props: Nocta.HTMLProps<"caption">
): Nocta.Tag<"caption">;
export function caption(children: Nocta.NodeChildren): Nocta.Tag<"caption">;
export function caption(
  props: Nocta.HTMLProps<"caption">,
  children: Nocta.NodeChildren
): Nocta.Tag<"caption">;
export function caption(...args: any[]): Nocta.Tag<"caption"> {
  return _c_t("caption", args);
}

/**
 * cite
 * Creates cite Tag node
 */
export function cite(): Nocta.Tag<"cite">;
export function cite(props: Nocta.HTMLProps<"cite">): Nocta.Tag<"cite">;
export function cite(children: Nocta.NodeChildren): Nocta.Tag<"cite">;
export function cite(
  props: Nocta.HTMLProps<"cite">,
  children: Nocta.NodeChildren
): Nocta.Tag<"cite">;
export function cite(...args: any[]): Nocta.Tag<"cite"> {
  return _c_t("cite", args);
}

/**
 * code
 * Creates code Tag node
 */
export function code(): Nocta.Tag<"code">;
export function code(props: Nocta.HTMLProps<"code">): Nocta.Tag<"code">;
export function code(children: Nocta.NodeChildren): Nocta.Tag<"code">;
export function code(
  props: Nocta.HTMLProps<"code">,
  children: Nocta.NodeChildren
): Nocta.Tag<"code">;
export function code(...args: any[]): Nocta.Tag<"code"> {
  return _c_t("code", args);
}

/**
 * col
 * Creates col Tag node
 */
export function col(props?: Nocta.HTMLProps<"col">): Nocta.Tag<"col"> {
  return props ? Tag("col", props) : Tag("col");
}

/**
 * colgroup
 * Creates colgroup Tag node
 */
export function colgroup(): Nocta.Tag<"colgroup">;
export function colgroup(
  props: Nocta.HTMLProps<"colgroup">
): Nocta.Tag<"colgroup">;
export function colgroup(children: Nocta.NodeChildren): Nocta.Tag<"colgroup">;
export function colgroup(
  props: Nocta.HTMLProps<"colgroup">,
  children: Nocta.NodeChildren
): Nocta.Tag<"colgroup">;
export function colgroup(...args: any[]): Nocta.Tag<"colgroup"> {
  return _c_t("colgroup", args);
}

/**
 * data
 * Creates data Tag node
 */
export function data(): Nocta.Tag<"data">;
export function data(props: Nocta.HTMLProps<"data">): Nocta.Tag<"data">;
export function data(children: Nocta.NodeChildren): Nocta.Tag<"data">;
export function data(
  props: Nocta.HTMLProps<"data">,
  children: Nocta.NodeChildren
): Nocta.Tag<"data">;
export function data(...args: any[]): Nocta.Tag<"data"> {
  return _c_t("data", args);
}

/**
 * datalist
 * Creates datalist Tag node
 */
export function datalist(): Nocta.Tag<"datalist">;
export function datalist(
  props: Nocta.HTMLProps<"datalist">
): Nocta.Tag<"datalist">;
export function datalist(children: Nocta.NodeChildren): Nocta.Tag<"datalist">;
export function datalist(
  props: Nocta.HTMLProps<"datalist">,
  children: Nocta.NodeChildren
): Nocta.Tag<"datalist">;
export function datalist(...args: any[]): Nocta.Tag<"datalist"> {
  return _c_t("datalist", args);
}

/**
 * dd
 * Creates dd Tag node
 */
export function dd(): Nocta.Tag<"dd">;
export function dd(props: Nocta.HTMLProps<"dd">): Nocta.Tag<"dd">;
export function dd(children: Nocta.NodeChildren): Nocta.Tag<"dd">;
export function dd(
  props: Nocta.HTMLProps<"dd">,
  children: Nocta.NodeChildren
): Nocta.Tag<"dd">;
export function dd(...args: any[]): Nocta.Tag<"dd"> {
  return _c_t("dd", args);
}

/**
 * del
 * Creates del Tag node
 */
export function del(): Nocta.Tag<"del">;
export function del(props: Nocta.HTMLProps<"del">): Nocta.Tag<"del">;
export function del(children: Nocta.NodeChildren): Nocta.Tag<"del">;
export function del(
  props: Nocta.HTMLProps<"del">,
  children: Nocta.NodeChildren
): Nocta.Tag<"del">;
export function del(...args: any[]): Nocta.Tag<"del"> {
  return _c_t("del", args);
}

/**
 * details
 * Creates details Tag node
 */
export function details(): Nocta.Tag<"details">;
export function details(
  props: Nocta.HTMLProps<"details">
): Nocta.Tag<"details">;
export function details(children: Nocta.NodeChildren): Nocta.Tag<"details">;
export function details(
  props: Nocta.HTMLProps<"details">,
  children: Nocta.NodeChildren
): Nocta.Tag<"details">;
export function details(...args: any[]): Nocta.Tag<"details"> {
  return _c_t("details", args);
}

/**
 * dfn
 * Creates dfn Tag node
 */
export function dfn(): Nocta.Tag<"dfn">;
export function dfn(props: Nocta.HTMLProps<"dfn">): Nocta.Tag<"dfn">;
export function dfn(children: Nocta.NodeChildren): Nocta.Tag<"dfn">;
export function dfn(
  props: Nocta.HTMLProps<"dfn">,
  children: Nocta.NodeChildren
): Nocta.Tag<"dfn">;
export function dfn(...args: any[]): Nocta.Tag<"dfn"> {
  return _c_t("dfn", args);
}

/**
 * dialog
 * Creates dialog Tag node
 */
export function dialog(): Nocta.Tag<"dialog">;
export function dialog(props: Nocta.HTMLProps<"dialog">): Nocta.Tag<"dialog">;
export function dialog(children: Nocta.NodeChildren): Nocta.Tag<"dialog">;
export function dialog(
  props: Nocta.HTMLProps<"dialog">,
  children: Nocta.NodeChildren
): Nocta.Tag<"dialog">;
export function dialog(...args: any[]): Nocta.Tag<"dialog"> {
  return _c_t("dialog", args);
}

/**
 * div
 * Creates div Tag node
 */
export function div(): Nocta.Tag<"div">;
export function div(props: Nocta.HTMLProps<"div">): Nocta.Tag<"div">;
export function div(children: Nocta.NodeChildren): Nocta.Tag<"div">;
export function div(
  props: Nocta.HTMLProps<"div">,
  children: Nocta.NodeChildren
): Nocta.Tag<"div">;
export function div(...args: any[]): Nocta.Tag<"div"> {
  return _c_t("div", args);
}

/**
 * dl
 * Creates dl Tag node
 */
export function dl(): Nocta.Tag<"dl">;
export function dl(props: Nocta.HTMLProps<"dl">): Nocta.Tag<"dl">;
export function dl(children: Nocta.NodeChildren): Nocta.Tag<"dl">;
export function dl(
  props: Nocta.HTMLProps<"dl">,
  children: Nocta.NodeChildren
): Nocta.Tag<"dl">;
export function dl(...args: any[]): Nocta.Tag<"dl"> {
  return _c_t("dl", args);
}

/**
 * dt
 * Creates dt Tag node
 */
export function dt(): Nocta.Tag<"dt">;
export function dt(props: Nocta.HTMLProps<"dt">): Nocta.Tag<"dt">;
export function dt(children: Nocta.NodeChildren): Nocta.Tag<"dt">;
export function dt(
  props: Nocta.HTMLProps<"dt">,
  children: Nocta.NodeChildren
): Nocta.Tag<"dt">;
export function dt(...args: any[]): Nocta.Tag<"dt"> {
  return _c_t("dt", args);
}

/**
 * em
 * Creates em Tag node
 */
export function em(): Nocta.Tag<"em">;
export function em(props: Nocta.HTMLProps<"em">): Nocta.Tag<"em">;
export function em(children: Nocta.NodeChildren): Nocta.Tag<"em">;
export function em(
  props: Nocta.HTMLProps<"em">,
  children: Nocta.NodeChildren
): Nocta.Tag<"em">;
export function em(...args: any[]): Nocta.Tag<"em"> {
  return _c_t("em", args);
}

/**
 * embed
 * Creates embed Tag node
 */
export function embed(props: Nocta.HTMLProps<"embed">): Nocta.Tag<"embed"> {
  return props ? Tag("embed", props) : Tag("embed");
}

/**
 * fieldset
 * Creates fieldset Tag node
 */
export function fieldset(): Nocta.Tag<"fieldset">;
export function fieldset(
  props: Nocta.HTMLProps<"fieldset">
): Nocta.Tag<"fieldset">;
export function fieldset(children: Nocta.NodeChildren): Nocta.Tag<"fieldset">;
export function fieldset(
  props: Nocta.HTMLProps<"fieldset">,
  children: Nocta.NodeChildren
): Nocta.Tag<"fieldset">;
export function fieldset(...args: any[]): Nocta.Tag<"fieldset"> {
  return _c_t("fieldset", args);
}

/**
 * figcaption
 * Creates figcaption Tag node
 */
export function figcaption(): Nocta.Tag<"figcaption">;
export function figcaption(
  props: Nocta.HTMLProps<"figcaption">
): Nocta.Tag<"figcaption">;
export function figcaption(
  children: Nocta.NodeChildren
): Nocta.Tag<"figcaption">;
export function figcaption(
  props: Nocta.HTMLProps<"figcaption">,
  children: Nocta.NodeChildren
): Nocta.Tag<"figcaption">;
export function figcaption(...args: any[]): Nocta.Tag<"figcaption"> {
  return _c_t("figcaption", args);
}

/**
 * figure
 * Creates figure Tag node
 */
export function figure(): Nocta.Tag<"figure">;
export function figure(props: Nocta.HTMLProps<"figure">): Nocta.Tag<"figure">;
export function figure(children: Nocta.NodeChildren): Nocta.Tag<"figure">;
export function figure(
  props: Nocta.HTMLProps<"figure">,
  children: Nocta.NodeChildren
): Nocta.Tag<"figure">;
export function figure(...args: any[]): Nocta.Tag<"figure"> {
  return _c_t("figure", args);
}

/**
 * footer
 * Creates footer Tag node
 */
export function footer(): Nocta.Tag<"footer">;
export function footer(props: Nocta.HTMLProps<"footer">): Nocta.Tag<"footer">;
export function footer(children: Nocta.NodeChildren): Nocta.Tag<"footer">;
export function footer(
  props: Nocta.HTMLProps<"footer">,
  children: Nocta.NodeChildren
): Nocta.Tag<"footer">;
export function footer(...args: any[]): Nocta.Tag<"footer"> {
  return _c_t("footer", args);
}

/**
 * form
 * Creates form Tag node
 */
export function form(): Nocta.Tag<"form">;
export function form(props: Nocta.HTMLProps<"form">): Nocta.Tag<"form">;
export function form(children: Nocta.NodeChildren): Nocta.Tag<"form">;
export function form(
  props: Nocta.HTMLProps<"form">,
  children: Nocta.NodeChildren
): Nocta.Tag<"form">;
export function form(...args: any[]): Nocta.Tag<"form"> {
  return _c_t("form", args);
}

/**
 * head
 * Creates head Tag node
 */
export function head(): Nocta.Tag<"head">;
export function head(props: Nocta.HTMLProps<"head">): Nocta.Tag<"head">;
export function head(children: Nocta.NodeChildren): Nocta.Tag<"head">;
export function head(
  props: Nocta.HTMLProps<"head">,
  children: Nocta.NodeChildren
): Nocta.Tag<"head">;
export function head(...args: any[]): Nocta.Tag<"head"> {
  return _c_t("head", args);
}

/**
 * header
 * Creates header Tag node
 */
export function header(): Nocta.Tag<"header">;
export function header(props: Nocta.HTMLProps<"header">): Nocta.Tag<"header">;
export function header(children: Nocta.NodeChildren): Nocta.Tag<"header">;
export function header(
  props: Nocta.HTMLProps<"header">,
  children: Nocta.NodeChildren
): Nocta.Tag<"header">;
export function header(...args: any[]): Nocta.Tag<"header"> {
  return _c_t("header", args);
}

/**
 * hgroup
 * Creates hgroup Tag node
 */
export function hgroup(): Nocta.Tag<"hgroup">;
export function hgroup(props: Nocta.HTMLProps<"hgroup">): Nocta.Tag<"hgroup">;
export function hgroup(children: Nocta.NodeChildren): Nocta.Tag<"hgroup">;
export function hgroup(
  props: Nocta.HTMLProps<"hgroup">,
  children: Nocta.NodeChildren
): Nocta.Tag<"hgroup">;
export function hgroup(...args: any[]): Nocta.Tag<"hgroup"> {
  return _c_t("hgroup", args);
}

/**
 * hr
 * Creates hr Tag node
 */
export function hr(props: Nocta.HTMLProps<"hr">): Nocta.Tag<"hr"> {
  return props ? Tag("hr", props) : Tag("hr");
}

/**
 * html
 * Creates html Tag node
 */
export function html(): Nocta.Tag<"html">;
export function html(props: Nocta.HTMLProps<"html">): Nocta.Tag<"html">;
export function html(children: Nocta.NodeChildren): Nocta.Tag<"html">;
export function html(
  props: Nocta.HTMLProps<"html">,
  children: Nocta.NodeChildren
): Nocta.Tag<"html">;
export function html(...args: any[]): Nocta.Tag<"html"> {
  return _c_t("html", args);
}

/**
 * i
 * Creates i Tag node
 */
export function i(): Nocta.Tag<"i">;
export function i(props: Nocta.HTMLProps<"i">): Nocta.Tag<"i">;
export function i(children: Nocta.NodeChildren): Nocta.Tag<"i">;
export function i(
  props: Nocta.HTMLProps<"i">,
  children: Nocta.NodeChildren
): Nocta.Tag<"i">;
export function i(...args: any[]): Nocta.Tag<"i"> {
  return _c_t("i", args);
}

/**
 * iframe
 * Creates iframe Tag node
 */
export function iframe(): Nocta.Tag<"iframe">;
export function iframe(props: Nocta.HTMLProps<"iframe">): Nocta.Tag<"iframe">;
export function iframe(children: Nocta.NodeChildren): Nocta.Tag<"iframe">;
export function iframe(
  props: Nocta.HTMLProps<"iframe">,
  children: Nocta.NodeChildren
): Nocta.Tag<"iframe">;
export function iframe(...args: any[]): Nocta.Tag<"iframe"> {
  return _c_t("iframe", args);
}

/**
 * img
 * Creates img Tag node
 */
export function img(props: Nocta.HTMLProps<"img">): Nocta.Tag<"img"> {
  return props ? Tag("img", props) : Tag("img");
}

/**
 * input
 * Creates input Tag node
 */
export function input(props?: Nocta.HTMLProps<"input">): Nocta.Tag<"input"> {
  return props ? Tag("input", props) : Tag("input");
}

/**
 * ins
 * Creates ins Tag node
 */
export function ins(): Nocta.Tag<"ins">;
export function ins(props: Nocta.HTMLProps<"ins">): Nocta.Tag<"ins">;
export function ins(children: Nocta.NodeChildren): Nocta.Tag<"ins">;
export function ins(
  props: Nocta.HTMLProps<"ins">,
  children: Nocta.NodeChildren
): Nocta.Tag<"ins">;
export function ins(...args: any[]): Nocta.Tag<"ins"> {
  return _c_t("ins", args);
}

/**
 * kbd
 * Creates kbd Tag node
 */
export function kbd(): Nocta.Tag<"kbd">;
export function kbd(props: Nocta.HTMLProps<"kbd">): Nocta.Tag<"kbd">;
export function kbd(children: Nocta.NodeChildren): Nocta.Tag<"kbd">;
export function kbd(
  props: Nocta.HTMLProps<"kbd">,
  children: Nocta.NodeChildren
): Nocta.Tag<"kbd">;
export function kbd(...args: any[]): Nocta.Tag<"kbd"> {
  return _c_t("kbd", args);
}

/**
 * label
 * Creates label Tag node
 */
export function label(): Nocta.Tag<"label">;
export function label(props: Nocta.HTMLProps<"label">): Nocta.Tag<"label">;
export function label(children: Nocta.NodeChildren): Nocta.Tag<"label">;
export function label(
  props: Nocta.HTMLProps<"label">,
  children: Nocta.NodeChildren
): Nocta.Tag<"label">;
export function label(...args: any[]): Nocta.Tag<"label"> {
  return _c_t("label", args);
}

/**
 * legend
 * Creates legend Tag node
 */
export function legend(): Nocta.Tag<"legend">;
export function legend(props: Nocta.HTMLProps<"legend">): Nocta.Tag<"legend">;
export function legend(children: Nocta.NodeChildren): Nocta.Tag<"legend">;
export function legend(
  props: Nocta.HTMLProps<"legend">,
  children: Nocta.NodeChildren
): Nocta.Tag<"legend">;
export function legend(...args: any[]): Nocta.Tag<"legend"> {
  return _c_t("legend", args);
}

/**
 * li
 * Creates li Tag node
 */
export function li(): Nocta.Tag<"li">;
export function li(props: Nocta.HTMLProps<"li">): Nocta.Tag<"li">;
export function li(children: Nocta.NodeChildren): Nocta.Tag<"li">;
export function li(
  props: Nocta.HTMLProps<"li">,
  children: Nocta.NodeChildren
): Nocta.Tag<"li">;
export function li(...args: any[]): Nocta.Tag<"li"> {
  return _c_t("li", args);
}

/**
 * link
 * Creates link Tag node
 */
export function link(props?: Nocta.HTMLProps<"link">): Nocta.Tag<"link"> {
  return props ? Tag("link", props) : Tag("link");
}

/**
 * main
 * Creates main Tag node
 */
export function main(): Nocta.Tag<"main">;
export function main(props: Nocta.HTMLProps<"main">): Nocta.Tag<"main">;
export function main(children: Nocta.NodeChildren): Nocta.Tag<"main">;
export function main(
  props: Nocta.HTMLProps<"main">,
  children: Nocta.NodeChildren
): Nocta.Tag<"main">;
export function main(...args: any[]): Nocta.Tag<"main"> {
  return _c_t("main", args);
}

/**
 * map
 * Creates map Tag node
 */
export function map(): Nocta.Tag<"map">;
export function map(props: Nocta.HTMLProps<"map">): Nocta.Tag<"map">;
export function map(children: Nocta.NodeChildren): Nocta.Tag<"map">;
export function map(
  props: Nocta.HTMLProps<"map">,
  children: Nocta.NodeChildren
): Nocta.Tag<"map">;
export function map(...args: any[]): Nocta.Tag<"map"> {
  return _c_t("map", args);
}

/**
 * mark
 * Creates mark Tag node
 */
export function mark(): Nocta.Tag<"mark">;
export function mark(props: Nocta.HTMLProps<"mark">): Nocta.Tag<"mark">;
export function mark(children: Nocta.NodeChildren): Nocta.Tag<"mark">;
export function mark(
  props: Nocta.HTMLProps<"mark">,
  children: Nocta.NodeChildren
): Nocta.Tag<"mark">;
export function mark(...args: any[]): Nocta.Tag<"mark"> {
  return _c_t("mark", args);
}

/**
 * menu
 * Creates menu Tag node
 */
export function menu(): Nocta.Tag<"menu">;
export function menu(props: Nocta.HTMLProps<"menu">): Nocta.Tag<"menu">;
export function menu(children: Nocta.NodeChildren): Nocta.Tag<"menu">;
export function menu(
  props: Nocta.HTMLProps<"menu">,
  children: Nocta.NodeChildren
): Nocta.Tag<"menu">;
export function menu(...args: any[]): Nocta.Tag<"menu"> {
  return _c_t("menu", args);
}

/**
 * meta
 * Creates meta Tag node
 */
export function meta(props: Nocta.HTMLProps<"meta">): Nocta.Tag<"meta"> {
  return props ? Tag("meta", props) : Tag("meta");
}

/**
 * meter
 * Creates meter Tag node
 */
export function meter(): Nocta.Tag<"meter">;
export function meter(props: Nocta.HTMLProps<"meter">): Nocta.Tag<"meter">;
export function meter(children: Nocta.NodeChildren): Nocta.Tag<"meter">;
export function meter(
  props: Nocta.HTMLProps<"meter">,
  children: Nocta.NodeChildren
): Nocta.Tag<"meter">;
export function meter(...args: any[]): Nocta.Tag<"meter"> {
  return _c_t("meter", args);
}

/**
 * nav
 * Creates nav Tag node
 */
export function nav(): Nocta.Tag<"nav">;
export function nav(props: Nocta.HTMLProps<"nav">): Nocta.Tag<"nav">;
export function nav(children: Nocta.NodeChildren): Nocta.Tag<"nav">;
export function nav(
  props: Nocta.HTMLProps<"nav">,
  children: Nocta.NodeChildren
): Nocta.Tag<"nav">;
export function nav(...args: any[]): Nocta.Tag<"nav"> {
  return _c_t("nav", args);
}

/**
 * noscript
 * Creates noscript Tag node
 */
export function noscript(): Nocta.Tag<"noscript">;
export function noscript(
  props: Nocta.HTMLProps<"noscript">
): Nocta.Tag<"noscript">;
export function noscript(children: Nocta.NodeChildren): Nocta.Tag<"noscript">;
export function noscript(
  props: Nocta.HTMLProps<"noscript">,
  children: Nocta.NodeChildren
): Nocta.Tag<"noscript">;
export function noscript(...args: any[]): Nocta.Tag<"noscript"> {
  return _c_t("noscript", args);
}

/**
 * object
 * Creates object Tag node
 */
export function object(): Nocta.Tag<"object">;
export function object(props: Nocta.HTMLProps<"object">): Nocta.Tag<"object">;
export function object(children: Nocta.NodeChildren): Nocta.Tag<"object">;
export function object(
  props: Nocta.HTMLProps<"object">,
  children: Nocta.NodeChildren
): Nocta.Tag<"object">;
export function object(...args: any[]): Nocta.Tag<"object"> {
  return _c_t("object", args);
}

/**
 * ol
 * Creates ol Tag node
 */
export function ol(): Nocta.Tag<"ol">;
export function ol(props: Nocta.HTMLProps<"ol">): Nocta.Tag<"ol">;
export function ol(children: Nocta.NodeChildren): Nocta.Tag<"ol">;
export function ol(
  props: Nocta.HTMLProps<"ol">,
  children: Nocta.NodeChildren
): Nocta.Tag<"ol">;
export function ol(...args: any[]): Nocta.Tag<"ol"> {
  return _c_t("ol", args);
}

/**
 * optgroup
 * Creates optgroup Tag node
 */
export function optgroup(): Nocta.Tag<"optgroup">;
export function optgroup(
  props: Nocta.HTMLProps<"optgroup">
): Nocta.Tag<"optgroup">;
export function optgroup(children: Nocta.NodeChildren): Nocta.Tag<"optgroup">;
export function optgroup(
  props: Nocta.HTMLProps<"optgroup">,
  children: Nocta.NodeChildren
): Nocta.Tag<"optgroup">;
export function optgroup(...args: any[]): Nocta.Tag<"optgroup"> {
  return _c_t("optgroup", args);
}

/**
 * option
 * Creates option Tag node
 */
export function option(): Nocta.Tag<"option">;
export function option(props: Nocta.HTMLProps<"option">): Nocta.Tag<"option">;
export function option(children: Nocta.NodeChildren): Nocta.Tag<"option">;
export function option(
  props: Nocta.HTMLProps<"option">,
  children: Nocta.NodeChildren
): Nocta.Tag<"option">;
export function option(...args: any[]): Nocta.Tag<"option"> {
  return _c_t("option", args);
}

/**
 * output
 * Creates output Tag node
 */
export function output(): Nocta.Tag<"output">;
export function output(props: Nocta.HTMLProps<"output">): Nocta.Tag<"output">;
export function output(children: Nocta.NodeChildren): Nocta.Tag<"output">;
export function output(
  props: Nocta.HTMLProps<"output">,
  children: Nocta.NodeChildren
): Nocta.Tag<"output">;
export function output(...args: any[]): Nocta.Tag<"output"> {
  return _c_t("output", args);
}

/**
 * p
 * Creates p Tag node
 */
export function p(): Nocta.Tag<"p">;
export function p(props: Nocta.HTMLProps<"p">): Nocta.Tag<"p">;
export function p(children: Nocta.NodeChildren): Nocta.Tag<"p">;
export function p(
  props: Nocta.HTMLProps<"p">,
  children: Nocta.NodeChildren
): Nocta.Tag<"p">;
export function p(...args: any[]): Nocta.Tag<"p"> {
  return _c_t("p", args);
}

/**
 * picture
 * Creates picture Tag node
 */
export function picture(): Nocta.Tag<"picture">;
export function picture(
  props: Nocta.HTMLProps<"picture">
): Nocta.Tag<"picture">;
export function picture(children: Nocta.NodeChildren): Nocta.Tag<"picture">;
export function picture(
  props: Nocta.HTMLProps<"picture">,
  children: Nocta.NodeChildren
): Nocta.Tag<"picture">;
export function picture(...args: any[]): Nocta.Tag<"picture"> {
  return _c_t("picture", args);
}

/**
 * pre
 * Creates pre Tag node
 */
export function pre(): Nocta.Tag<"pre">;
export function pre(props: Nocta.HTMLProps<"pre">): Nocta.Tag<"pre">;
export function pre(children: Nocta.NodeChildren): Nocta.Tag<"pre">;
export function pre(
  props: Nocta.HTMLProps<"pre">,
  children: Nocta.NodeChildren
): Nocta.Tag<"pre">;
export function pre(...args: any[]): Nocta.Tag<"pre"> {
  return _c_t("pre", args);
}

/**
 * progress
 * Creates progress Tag node
 */
export function progress(): Nocta.Tag<"progress">;
export function progress(
  props: Nocta.HTMLProps<"progress">
): Nocta.Tag<"progress">;
export function progress(children: Nocta.NodeChildren): Nocta.Tag<"progress">;
export function progress(
  props: Nocta.HTMLProps<"progress">,
  children: Nocta.NodeChildren
): Nocta.Tag<"progress">;
export function progress(...args: any[]): Nocta.Tag<"progress"> {
  return _c_t("progress", args);
}

/**
 * q
 * Creates q Tag node
 */
export function q(): Nocta.Tag<"q">;
export function q(props: Nocta.HTMLProps<"q">): Nocta.Tag<"q">;
export function q(children: Nocta.NodeChildren): Nocta.Tag<"q">;
export function q(
  props: Nocta.HTMLProps<"q">,
  children: Nocta.NodeChildren
): Nocta.Tag<"q">;
export function q(...args: any[]): Nocta.Tag<"q"> {
  return _c_t("q", args);
}

/**
 * rp
 * Creates rp Tag node
 */
export function rp(): Nocta.Tag<"rp">;
export function rp(props: Nocta.HTMLProps<"rp">): Nocta.Tag<"rp">;
export function rp(children: Nocta.NodeChildren): Nocta.Tag<"rp">;
export function rp(
  props: Nocta.HTMLProps<"rp">,
  children: Nocta.NodeChildren
): Nocta.Tag<"rp">;
export function rp(...args: any[]): Nocta.Tag<"rp"> {
  return _c_t("rp", args);
}

/**
 * rt
 * Creates rt Tag node
 */
export function rt(): Nocta.Tag<"rt">;
export function rt(props: Nocta.HTMLProps<"rt">): Nocta.Tag<"rt">;
export function rt(children: Nocta.NodeChildren): Nocta.Tag<"rt">;
export function rt(
  props: Nocta.HTMLProps<"rt">,
  children: Nocta.NodeChildren
): Nocta.Tag<"rt">;
export function rt(...args: any[]): Nocta.Tag<"rt"> {
  return _c_t("rt", args);
}

/**
 * ruby
 * Creates ruby Tag node
 */
export function ruby(): Nocta.Tag<"ruby">;
export function ruby(props: Nocta.HTMLProps<"ruby">): Nocta.Tag<"ruby">;
export function ruby(children: Nocta.NodeChildren): Nocta.Tag<"ruby">;
export function ruby(
  props: Nocta.HTMLProps<"ruby">,
  children: Nocta.NodeChildren
): Nocta.Tag<"ruby">;
export function ruby(...args: any[]): Nocta.Tag<"ruby"> {
  return _c_t("ruby", args);
}

/**
 * s
 * Creates s Tag node
 */
export function s(): Nocta.Tag<"s">;
export function s(props: Nocta.HTMLProps<"s">): Nocta.Tag<"s">;
export function s(children: Nocta.NodeChildren): Nocta.Tag<"s">;
export function s(
  props: Nocta.HTMLProps<"s">,
  children: Nocta.NodeChildren
): Nocta.Tag<"s">;
export function s(...args: any[]): Nocta.Tag<"s"> {
  return _c_t("s", args);
}

/**
 * samp
 * Creates samp Tag node
 */
export function samp(): Nocta.Tag<"samp">;
export function samp(props: Nocta.HTMLProps<"samp">): Nocta.Tag<"samp">;
export function samp(children: Nocta.NodeChildren): Nocta.Tag<"samp">;
export function samp(
  props: Nocta.HTMLProps<"samp">,
  children: Nocta.NodeChildren
): Nocta.Tag<"samp">;
export function samp(...args: any[]): Nocta.Tag<"samp"> {
  return _c_t("samp", args);
}

/**
 * script
 * Creates script Tag node
 */
export function script(): Nocta.Tag<"script">;
export function script(props: Nocta.HTMLProps<"script">): Nocta.Tag<"script">;
export function script(children: Nocta.NodeChildren): Nocta.Tag<"script">;
export function script(
  props: Nocta.HTMLProps<"script">,
  children: Nocta.NodeChildren
): Nocta.Tag<"script">;
export function script(...args: any[]): Nocta.Tag<"script"> {
  return _c_t("script", args);
}

/**
 * search
 * Creates search Tag node
 */
export function search(): Nocta.Tag<"search">;
export function search(props: Nocta.HTMLProps<"search">): Nocta.Tag<"search">;
export function search(children: Nocta.NodeChildren): Nocta.Tag<"search">;
export function search(
  props: Nocta.HTMLProps<"search">,
  children: Nocta.NodeChildren
): Nocta.Tag<"search">;
export function search(...args: any[]): Nocta.Tag<"search"> {
  return _c_t("search", args);
}

/**
 * section
 * Creates section Tag node
 */
export function section(): Nocta.Tag<"section">;
export function section(
  props: Nocta.HTMLProps<"section">
): Nocta.Tag<"section">;
export function section(children: Nocta.NodeChildren): Nocta.Tag<"section">;
export function section(
  props: Nocta.HTMLProps<"section">,
  children: Nocta.NodeChildren
): Nocta.Tag<"section">;
export function section(...args: any[]): Nocta.Tag<"section"> {
  return _c_t("section", args);
}

/**
 * select
 * Creates select Tag node
 */
export function select(): Nocta.Tag<"select">;
export function select(props: Nocta.HTMLProps<"select">): Nocta.Tag<"select">;
export function select(children: Nocta.NodeChildren): Nocta.Tag<"select">;
export function select(
  props: Nocta.HTMLProps<"select">,
  children: Nocta.NodeChildren
): Nocta.Tag<"select">;
export function select(...args: any[]): Nocta.Tag<"select"> {
  return _c_t("select", args);
}

/**
 * small
 * Creates small Tag node
 */
export function small(): Nocta.Tag<"small">;
export function small(props: Nocta.HTMLProps<"small">): Nocta.Tag<"small">;
export function small(children: Nocta.NodeChildren): Nocta.Tag<"small">;
export function small(
  props: Nocta.HTMLProps<"small">,
  children: Nocta.NodeChildren
): Nocta.Tag<"small">;
export function small(...args: any[]): Nocta.Tag<"small"> {
  return _c_t("small", args);
}

/**
 * source
 * Creates source Tag node
 */
export function source(props?: Nocta.HTMLProps<"source">): Nocta.Tag<"source"> {
  return props ? Tag("source", props) : Tag("source");
}

/**
 * span
 * Creates span Tag node
 */
export function span(): Nocta.Tag<"span">;
export function span(props: Nocta.HTMLProps<"span">): Nocta.Tag<"span">;
export function span(children: Nocta.NodeChildren): Nocta.Tag<"span">;
export function span(
  props: Nocta.HTMLProps<"span">,
  children: Nocta.NodeChildren
): Nocta.Tag<"span">;
export function span(...args: any[]): Nocta.Tag<"span"> {
  return _c_t("span", args);
}

/**
 * strong
 * Creates strong Tag node
 */
export function strong(): Nocta.Tag<"strong">;
export function strong(props: Nocta.HTMLProps<"strong">): Nocta.Tag<"strong">;
export function strong(children: Nocta.NodeChildren): Nocta.Tag<"strong">;
export function strong(
  props: Nocta.HTMLProps<"strong">,
  children: Nocta.NodeChildren
): Nocta.Tag<"strong">;
export function strong(...args: any[]): Nocta.Tag<"strong"> {
  return _c_t("strong", args);
}

/**
 * style
 * Creates style Tag node
 */
export function style(): Nocta.Tag<"style">;
export function style(props: Nocta.HTMLProps<"style">): Nocta.Tag<"style">;
export function style(children: Nocta.NodeChildren): Nocta.Tag<"style">;
export function style(
  props: Nocta.HTMLProps<"style">,
  children: Nocta.NodeChildren
): Nocta.Tag<"style">;
export function style(...args: any[]): Nocta.Tag<"style"> {
  return _c_t("style", args);
}

/**
 * sub
 * Creates sub Tag node
 */
export function sub(): Nocta.Tag<"sub">;
export function sub(props: Nocta.HTMLProps<"sub">): Nocta.Tag<"sub">;
export function sub(children: Nocta.NodeChildren): Nocta.Tag<"sub">;
export function sub(
  props: Nocta.HTMLProps<"sub">,
  children: Nocta.NodeChildren
): Nocta.Tag<"sub">;
export function sub(...args: any[]): Nocta.Tag<"sub"> {
  return _c_t("sub", args);
}

/**
 * summary
 * Creates summary Tag node
 */
export function summary(): Nocta.Tag<"summary">;
export function summary(
  props: Nocta.HTMLProps<"summary">
): Nocta.Tag<"summary">;
export function summary(children: Nocta.NodeChildren): Nocta.Tag<"summary">;
export function summary(
  props: Nocta.HTMLProps<"summary">,
  children: Nocta.NodeChildren
): Nocta.Tag<"summary">;
export function summary(...args: any[]): Nocta.Tag<"summary"> {
  return _c_t("summary", args);
}

/**
 * sup
 * Creates sup Tag node
 */
export function sup(): Nocta.Tag<"sup">;
export function sup(props: Nocta.HTMLProps<"sup">): Nocta.Tag<"sup">;
export function sup(children: Nocta.NodeChildren): Nocta.Tag<"sup">;
export function sup(
  props: Nocta.HTMLProps<"sup">,
  children: Nocta.NodeChildren
): Nocta.Tag<"sup">;
export function sup(...args: any[]): Nocta.Tag<"sup"> {
  return _c_t("sup", args);
}

/**
 * table
 * Creates table Tag node
 */
export function table(): Nocta.Tag<"table">;
export function table(props: Nocta.HTMLProps<"table">): Nocta.Tag<"table">;
export function table(children: Nocta.NodeChildren): Nocta.Tag<"table">;
export function table(
  props: Nocta.HTMLProps<"table">,
  children: Nocta.NodeChildren
): Nocta.Tag<"table">;
export function table(...args: any[]): Nocta.Tag<"table"> {
  return _c_t("table", args);
}

/**
 * tbody
 * Creates tbody Tag node
 */
export function tbody(): Nocta.Tag<"tbody">;
export function tbody(props: Nocta.HTMLProps<"tbody">): Nocta.Tag<"tbody">;
export function tbody(children: Nocta.NodeChildren): Nocta.Tag<"tbody">;
export function tbody(
  props: Nocta.HTMLProps<"tbody">,
  children: Nocta.NodeChildren
): Nocta.Tag<"tbody">;
export function tbody(...args: any[]): Nocta.Tag<"tbody"> {
  return _c_t("tbody", args);
}

/**
 * td
 * Creates td Tag node
 */
export function td(): Nocta.Tag<"td">;
export function td(props: Nocta.HTMLProps<"td">): Nocta.Tag<"td">;
export function td(children: Nocta.NodeChildren): Nocta.Tag<"td">;
export function td(
  props: Nocta.HTMLProps<"td">,
  children: Nocta.NodeChildren
): Nocta.Tag<"td">;
export function td(...args: any[]): Nocta.Tag<"td"> {
  return _c_t("td", args);
}

/**
 * template
 * Creates template Tag node
 */
export function template(): Nocta.Tag<"template">;
export function template(
  props: Nocta.HTMLProps<"template">
): Nocta.Tag<"template">;
export function template(children: Nocta.NodeChildren): Nocta.Tag<"template">;
export function template(
  props: Nocta.HTMLProps<"template">,
  children: Nocta.NodeChildren
): Nocta.Tag<"template">;
export function template(...args: any[]): Nocta.Tag<"template"> {
  return _c_t("template", args);
}

/**
 * textarea
 * Creates textarea Tag node
 */
export function textarea(): Nocta.Tag<"textarea">;
export function textarea(
  props: Nocta.HTMLProps<"textarea">
): Nocta.Tag<"textarea">;
export function textarea(children: Nocta.NodeChildren): Nocta.Tag<"textarea">;
export function textarea(
  props: Nocta.HTMLProps<"textarea">,
  children: Nocta.NodeChildren
): Nocta.Tag<"textarea">;
export function textarea(...args: any[]): Nocta.Tag<"textarea"> {
  return _c_t("textarea", args);
}

/**
 * tfoot
 * Creates tfoot Tag node
 */
export function tfoot(): Nocta.Tag<"tfoot">;
export function tfoot(props: Nocta.HTMLProps<"tfoot">): Nocta.Tag<"tfoot">;
export function tfoot(children: Nocta.NodeChildren): Nocta.Tag<"tfoot">;
export function tfoot(
  props: Nocta.HTMLProps<"tfoot">,
  children: Nocta.NodeChildren
): Nocta.Tag<"tfoot">;
export function tfoot(...args: any[]): Nocta.Tag<"tfoot"> {
  return _c_t("tfoot", args);
}

/**
 * th
 * Creates th Tag node
 */
export function th(): Nocta.Tag<"th">;
export function th(props: Nocta.HTMLProps<"th">): Nocta.Tag<"th">;
export function th(children: Nocta.NodeChildren): Nocta.Tag<"th">;
export function th(
  props: Nocta.HTMLProps<"th">,
  children: Nocta.NodeChildren
): Nocta.Tag<"th">;
export function th(...args: any[]): Nocta.Tag<"th"> {
  return _c_t("th", args);
}

/**
 * thead
 * Creates thead Tag node
 */
export function thead(): Nocta.Tag<"thead">;
export function thead(props: Nocta.HTMLProps<"thead">): Nocta.Tag<"thead">;
export function thead(children: Nocta.NodeChildren): Nocta.Tag<"thead">;
export function thead(
  props: Nocta.HTMLProps<"thead">,
  children: Nocta.NodeChildren
): Nocta.Tag<"thead">;
export function thead(...args: any[]): Nocta.Tag<"thead"> {
  return _c_t("thead", args);
}

/**
 * time
 * Creates time Tag node
 */
export function time(): Nocta.Tag<"time">;
export function time(props: Nocta.HTMLProps<"time">): Nocta.Tag<"time">;
export function time(children: Nocta.NodeChildren): Nocta.Tag<"time">;
export function time(
  props: Nocta.HTMLProps<"time">,
  children: Nocta.NodeChildren
): Nocta.Tag<"time">;
export function time(...args: any[]): Nocta.Tag<"time"> {
  return _c_t("time", args);
}

/**
 * title
 * Creates title Tag node
 */
export function title(): Nocta.Tag<"title">;
export function title(props: Nocta.HTMLProps<"title">): Nocta.Tag<"title">;
export function title(children: Nocta.NodeChildren): Nocta.Tag<"title">;
export function title(
  props: Nocta.HTMLProps<"title">,
  children: Nocta.NodeChildren
): Nocta.Tag<"title">;
export function title(...args: any[]): Nocta.Tag<"title"> {
  return _c_t("title", args);
}

/**
 * tr
 * Creates tr Tag node
 */
export function tr(): Nocta.Tag<"tr">;
export function tr(props: Nocta.HTMLProps<"tr">): Nocta.Tag<"tr">;
export function tr(children: Nocta.NodeChildren): Nocta.Tag<"tr">;
export function tr(
  props: Nocta.HTMLProps<"tr">,
  children: Nocta.NodeChildren
): Nocta.Tag<"tr">;
export function tr(...args: any[]): Nocta.Tag<"tr"> {
  return _c_t("tr", args);
}

/**
 * track
 * Creates track Tag node
 */
export function track(props?: Nocta.HTMLProps<"track">): Nocta.Tag<"track"> {
  return props ? Tag("track", props) : Tag("track");
}

/**
 * u
 * Creates u Tag node
 */
export function u(): Nocta.Tag<"u">;
export function u(props: Nocta.HTMLProps<"u">): Nocta.Tag<"u">;
export function u(children: Nocta.NodeChildren): Nocta.Tag<"u">;
export function u(
  props: Nocta.HTMLProps<"u">,
  children: Nocta.NodeChildren
): Nocta.Tag<"u">;
export function u(...args: any[]): Nocta.Tag<"u"> {
  return _c_t("u", args);
}

/**
 * ul
 * Creates ul Tag node
 */
export function ul(): Nocta.Tag<"ul">;
export function ul(props: Nocta.HTMLProps<"ul">): Nocta.Tag<"ul">;
export function ul(children: Nocta.NodeChildren): Nocta.Tag<"ul">;
export function ul(
  props: Nocta.HTMLProps<"ul">,
  children: Nocta.NodeChildren
): Nocta.Tag<"ul">;
export function ul(...args: any[]): Nocta.Tag<"ul"> {
  return _c_t("ul", args);
}

/**
 * video
 * Creates video Tag node
 */
export function video(): Nocta.Tag<"video">;
export function video(props: Nocta.HTMLProps<"video">): Nocta.Tag<"video">;
export function video(children: Nocta.NodeChildren): Nocta.Tag<"video">;
export function video(
  props: Nocta.HTMLProps<"video">,
  children: Nocta.NodeChildren
): Nocta.Tag<"video">;
export function video(...args: any[]): Nocta.Tag<"video"> {
  return _c_t("video", args);
}

/**
 * wbr
 * Creates wbr Tag node
 */
export function wbr(props?: Nocta.HTMLProps<"wbr">): Nocta.Tag<"wbr"> {
  return props ? Tag("wbr", props) : Tag("wbr");
}
