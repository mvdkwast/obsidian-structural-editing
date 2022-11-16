# Structural Editing

> **Warning**
> This code is work in progress. Please do not deploy on your main
vault without backups. Commands may change at any time !


Plugin for [Obsidian](https://obsidian.md) that allows you to manipulate text
in a structural aware way.  

This plugin exposes the following commands, which can be mapped to keyboard shortcuts :
- `Stuctural Editing: Grow selection` 
- `Stuctural Editing: Shrink selection` 

## Features

Blocks are organised in a hierarchy, consisting roughly of sections (delimited
by headings), paragraphs, sentences, propositions and words.

Extending the selection moves the selection up in the hierarchy.

## INSTALL

If you want to check this out before this plugin is approved as a community plugin, you may use the [Obsidian
BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin to install it. Point it to this url :
https://github.com/mvdkwast/obsidian-copy-as-html

## Implementation

The plugin converts the markdown into parse trees. At block level, it uses the
[mdast parser](https://unifiedjs.com/explore/package/mdast-util-from-markdown/).
The tree is post-processed to nest sections based on header levels.

Inside paragraphs text is parsed into an AST using a custom grammar. The parser
is generated by [Anltr4ts](https://github.com/tunnelvisionlabs/antlr4ts). The
resulting parse tree is then post-processed into an AST.

## Known issues

### Ambiguity

Trying to organize free text into a tree representation is not an exact
science. Many constructs are ambiguous, and trying to guess the next logical
block can be very subjective.

Markdown sections and semantic features can overlap : 

```markdown
This is a **sentence, that shows** the problem.
```

Semantically the sentence is composed of 2 propositions separated by a comma.
The range in bold crosses the propositions, so it's not possible to represent
both aspects in the same parse tree. In this plugin I chose to ignore the
Markdown make-up.

### Shrink selection

It's not possible yet to shrink a selection when no "grow selection" has been
done before.


## TODO / wish-list

- Structural moving blocks (eg. moving sentences, swapping sections, ...)
- Move cursor to start/end of block (sentence, paragraph, section, ...)

## Development

Please see the [Obsidian sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin).

## Credits

