// @ts-nocheck
import * as __fd_glob_42 from "../content/docs/workflows/vscode.mdx?collection=docs"
import * as __fd_glob_41 from "../content/docs/workflows/package-authoring.mdx?collection=docs"
import * as __fd_glob_40 from "../content/docs/shader-languages/keywords-cheatsheet.mdx?collection=docs"
import * as __fd_glob_39 from "../content/docs/shader-languages/hlsl.mdx?collection=docs"
import * as __fd_glob_38 from "../content/docs/shader-languages/glsl.mdx?collection=docs"
import * as __fd_glob_37 from "../content/docs/syntax/types-and-values.mdx?collection=docs"
import * as __fd_glob_36 from "../content/docs/syntax/sections.mdx?collection=docs"
import * as __fd_glob_35 from "../content/docs/syntax/imports-and-namespaces.mdx?collection=docs"
import * as __fd_glob_34 from "../content/docs/syntax/graph.mdx?collection=docs"
import * as __fd_glob_33 from "../content/docs/syntax/functions.mdx?collection=docs"
import * as __fd_glob_32 from "../content/docs/syntax/file-model.mdx?collection=docs"
import * as __fd_glob_31 from "../content/docs/syntax/declarations.mdx?collection=docs"
import * as __fd_glob_30 from "../content/docs/reference/ue-nodes.mdx?collection=docs"
import * as __fd_glob_29 from "../content/docs/reference/packages.mdx?collection=docs"
import * as __fd_glob_28 from "../content/docs/reference/outputs.mdx?collection=docs"
import * as __fd_glob_27 from "../content/docs/reference/material-settings.mdx?collection=docs"
import * as __fd_glob_26 from "../content/docs/examples/recipes.mdx?collection=docs"
import * as __fd_glob_25 from "../content/docs/examples/patterns.mdx?collection=docs"
import * as __fd_glob_24 from "../content/docs/getting-started/project-layout.mdx?collection=docs"
import * as __fd_glob_23 from "../content/docs/getting-started/installation.mdx?collection=docs"
import * as __fd_glob_22 from "../content/docs/getting-started/first-material.mdx?collection=docs"
import * as __fd_glob_21 from "../content/docs/dreamshader/workflow.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/dreamshader/repositories.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/dreamshader/overview.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/dreamshader/installation.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/changelog/website.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/changelog/vscode-extension.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/changelog/index.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/changelog/dreamshader.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/compiler/limitations.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/compiler/diagnostics.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/compiler/asset-generation.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_9 } from "../content/docs/syntax/meta.json?collection=docs"
import { default as __fd_glob_8 } from "../content/docs/shader-languages/meta.json?collection=docs"
import { default as __fd_glob_7 } from "../content/docs/workflows/meta.json?collection=docs"
import { default as __fd_glob_6 } from "../content/docs/reference/meta.json?collection=docs"
import { default as __fd_glob_5 } from "../content/docs/getting-started/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/examples/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/dreamshader/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/compiler/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/changelog/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "changelog/meta.json": __fd_glob_1, "compiler/meta.json": __fd_glob_2, "dreamshader/meta.json": __fd_glob_3, "examples/meta.json": __fd_glob_4, "getting-started/meta.json": __fd_glob_5, "reference/meta.json": __fd_glob_6, "workflows/meta.json": __fd_glob_7, "shader-languages/meta.json": __fd_glob_8, "syntax/meta.json": __fd_glob_9, }, {"index.mdx": __fd_glob_10, "compiler/asset-generation.mdx": __fd_glob_11, "compiler/diagnostics.mdx": __fd_glob_12, "compiler/limitations.mdx": __fd_glob_13, "changelog/dreamshader.mdx": __fd_glob_14, "changelog/index.mdx": __fd_glob_15, "changelog/vscode-extension.mdx": __fd_glob_16, "changelog/website.mdx": __fd_glob_17, "dreamshader/installation.mdx": __fd_glob_18, "dreamshader/overview.mdx": __fd_glob_19, "dreamshader/repositories.mdx": __fd_glob_20, "dreamshader/workflow.mdx": __fd_glob_21, "getting-started/first-material.mdx": __fd_glob_22, "getting-started/installation.mdx": __fd_glob_23, "getting-started/project-layout.mdx": __fd_glob_24, "examples/patterns.mdx": __fd_glob_25, "examples/recipes.mdx": __fd_glob_26, "reference/material-settings.mdx": __fd_glob_27, "reference/outputs.mdx": __fd_glob_28, "reference/packages.mdx": __fd_glob_29, "reference/ue-nodes.mdx": __fd_glob_30, "syntax/declarations.mdx": __fd_glob_31, "syntax/file-model.mdx": __fd_glob_32, "syntax/functions.mdx": __fd_glob_33, "syntax/graph.mdx": __fd_glob_34, "syntax/imports-and-namespaces.mdx": __fd_glob_35, "syntax/sections.mdx": __fd_glob_36, "syntax/types-and-values.mdx": __fd_glob_37, "shader-languages/glsl.mdx": __fd_glob_38, "shader-languages/hlsl.mdx": __fd_glob_39, "shader-languages/keywords-cheatsheet.mdx": __fd_glob_40, "workflows/package-authoring.mdx": __fd_glob_41, "workflows/vscode.mdx": __fd_glob_42, });