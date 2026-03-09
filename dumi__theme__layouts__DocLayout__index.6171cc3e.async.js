"use strict";(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[367],{34053:function(M,x,e){e.r(x),e.d(x,{default:function(){return O}});var g=e(5574),v=e.n(g),P=e(97857),D=e.n(P),t=e(10960),S=e(78269),j=e(67294),c=e(67561),r=e(85893),d=c.Z.Link,N=function(n){var u=n.showDebug,a=n.debugDemos,h=a===void 0?[]:a,p=(0,t.eL)(),o=(0,t.zh)(),f=j.useMemo(function(){var m=(o==null?void 0:o.toc)||p.toc;return m.reduce(function(l,i){if(i.depth===2)l.push(D()({},i));else if(i.depth===3){var s=l[l.length-1];s&&(s.children=s.children||[],s.children.push(D()({},i)))}return l},[])},[o==null?void 0:o.toc,p.toc]);return p.frontmatter.toc?(0,r.jsx)("section",{className:"doc-anchor-toc-wrapper",children:(0,r.jsx)(c.Z,{affix:!1,className:"doc-anchor-toc",offsetTop:80,children:f.map(function(m){var l;return(0,r.jsx)(d,{href:"#".concat(m.id),title:m.title,children:(l=m.children)===null||l===void 0?void 0:l.filter(function(i){return u||!h.includes(i.id)}).map(function(i){return(0,r.jsx)(d,{href:"#".concat(i.id),title:(0,r.jsx)("span",{className:h.includes(i.id)?"toc-debug":void 0,children:i.title})},i.id)})},m.id)})})}):null},I=N;function O(b){var n=(0,t.TH)(),u=n.pathname,a=u==="/"||u==="/index-cn",h=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S.Z,D()({},b)),!a&&(0,r.jsx)(I,D()({},b)),!a&&(0,r.jsx)(R,{})]});return(0,r.jsx)("div",{"data-homepage":a?"true":void 0,"data-articlepage":a?void 0:"true",children:h})}var R=function(){var n=(0,t.eL)(),u=j.useMemo(function(){var o;if(!n.frontmatter.subtitle&&!n.frontmatter.title)o="404 Not Found - Ant Design";else{var f;o="".concat(n.frontmatter.subtitle||""," ").concat(((f=n.frontmatter)===null||f===void 0?void 0:f.title)||""," - Ant Design")}var m=n.frontmatter.description||"";return[o,m]},[n]),a=v()(u,2),h=a[0],p=a[1];return(0,r.jsxs)(t.ql,{children:[(0,r.jsx)("title",{children:h}),(0,r.jsx)("meta",{property:"og:title",content:h}),p&&(0,r.jsx)("meta",{name:"description",content:p})]})}},74262:function(M,x,e){e.d(x,{Z:function(){return R}});var g=e(15360),v=e(10960),P=e(67294),D=e(68400),t=e.n(D),S=e(22665),j=e(70917),c=e(95978),r=e(85893),d,N=function(){var n=(0,c.Fg)(),u={siteMarkdownCodeBg:n.colorFillTertiary,siteMarkdownCodeBgDark:"#000",codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"},a=".ant",h="#1677ff";return(0,r.jsx)(j.xB,{styles:(0,j.iv)(d||(d=t()([`
       @layer global {
         .markdown :where(
           dl,
           dt,
           dd,
           ul,
           ol,
           li,
           h1,
           h2,
           h3,
           h4,
           h5,
           h6,
           pre,
           code,
           form,
           fieldset,
           legend,
           input,
           textarea,
           p,
           blockquote,
           th,
           td,
           hr,
           button,
           article,
           aside,
           details,
           figcaption,
           figure,
           footer,
           header,
           hgroup,
           menu,
           nav,
           section
         ) {
            margin: 0;
            padding: 0;
          }

          .markdown :where(ul, ol) {
            list-style: none;
          }

          .markdown img {
            vertical-align: middle;
            border-style: none;
          }

          .markdown [id] {
            scroll-margin-top: 100px;
          }

          [data-prefers-color='dark'] {
            color-scheme: dark;
          }

          [data-prefers-color='light'] {
            color-scheme: light;
          }
        }
        .markdown {
          color: `,`;
          font-size: `,`px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
          display: inline;
        }

        .markdown a {
          color: `,`;
          text-decoration: none;
          background-color: transparent;
          cursor: pointer;
          transition: color 0.3s;
          webkit-text-decoration-skip: objects;

          &:focus-visible {
            outline: 2px solid `,`;
            outline-offset: 2px;
          }

          &:hover {
            color: `,`;
          }
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img,
        .markdown li > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: `,`px;
          margin-bottom: `,`px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-inline-start: `,`px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: `,`px;
        }

        .markdown h5 {
          font-size: `,`px;
        }

        .markdown h6 {
          font-size: `,`px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: `,`px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li,
        .markdown ol > li {
          padding-inline-start: `,`px;
          margin-inline-start: `,`px;
          > p {
            margin: 0.2em 0;
          }
          &:empty {
            display: none;
          }
        }

        .markdown ul > li {
          list-style-type: circle;
        }

        .markdown ol > li {
          list-style-type: decimal;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background-color: `,`;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            scrollbar-width: thin;
            scrollbar-gutter: stable;
            padding: `,"px ",`px;
            font-size: `,`px;
            line-height: 2;
          }
        }

        [data-prefers-color='dark'] {
          .markdown .dumi-default-source-code {
            background-color: `,`;
          }
        }

        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 `,`px;
            color: #aaa;
            font-size: 30px;
            user-select: none;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-inline-end: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-inline-start: 0.8em;
          color: `,`;
          font-size: 90%;
          border-inline-start: 4px solid `,`;

          .rtl & {
            padding-inline-end: 0.8em;
            padding-inline-start: 0;
            border-inline-end: 4px solid `,`;
            border-inline-start: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-inline-start: `,`px;
          opacity: 0;
          transition: opacity `,`;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-inline-start: `,`px;
          text-decoration: none;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: `,`px;
            transition: all `,`;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          &-content {
            scrollbar-width: thin;
            scrollbar-gutter: stable;
          }
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: `,"px ",`px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-inline-start: 1px solid `,`;
              }

              &:last-child {
                border-inline-end: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all `,`;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: `,`;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }

          /*
              Api \u8868\u4E2D\u67D0\u4E9B\u5C5E\u6027\u7528 del \u6807\u8BB0\uFF0C\u8868\u793A\u5DF2\u5E9F\u5F03\uFF08\u4F46\u4ECD\u671F\u671B\u7ED9\u5F00\u53D1\u8005\u4E00\u4E2A\u8FC7\u6E21\u671F)\u7528 css \u6807\u8BB0\u51FA\u6765\u3002\u4EC5\u6B64\u800C\u5DF2\u3002
              \u6709\u66F4\u591A\u770B\u6CD5\uFF1F\u79FB\u6B65\u8BA8\u8BBA\u533A: https://github.com/ant-design/ant-design/discussions/51298
            */
          tr:has(td:first-child > del) {
            color: `,` !important;
            background-color: `,` !important;
            display: var(--antd-site-api-deprecated-display, none);

            del {
              color: `,`;
            }

            &:hover del {
              text-decoration: none;
            }
          }
        }

        .grid-demo,
        [id^='grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: `,`px;
            margin-bottom: `,`px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: `,`px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='grid-demo-playground'],
        [id='grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),n.colorText,n.fontSize,n.colorPrimary,n.colorPrimary,n.colorPrimaryHover,n.marginXS,n.marginMD,n.colorTextHeading,n.fontFamily,n.marginSM,n.colorTextHeading,n.fontFamily,n.fontSizeLG,n.fontSize,n.fontSizeSM,n.marginLG,n.colorSplit,a,n.paddingXXS,n.marginMD,u.siteMarkdownCodeBg,n.colorSplit,n.borderRadiusSM,u.codeFamily,u.siteMarkdownCodeBg,n.borderRadius,n.colorText,Math.max(n.fontSize-1,12),n.colorBgLayout,u.siteMarkdownCodeBg,n.borderRadius,n.paddingSM,n.paddingMD,n.fontSize,u.siteMarkdownCodeBgDark,n.marginMD,n.colorTextSecondary,n.colorSplit,n.colorSplit,n.marginXS,n.motionDurationSlow,n.marginXS,n.marginXS,n.marginXS,a,n.colorTextSecondary,n.fontSizeLG,n.motionDurationSlow,n.colorText,n.colorSplit,n.paddingSM,n.paddingLG,n.colorSplit,n.colorSplit,n.colorSplit,n.motionDurationSlow,Math.max(n.fontSize-1,12),u.codeFamily,n.lineHeight,n.colorSplit,n.colorText,n.fontWeightStrong,n.magenta7,Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),n.colorWarning,n.colorWarningBg,n.colorWarning,a,a,n.marginXS,n.marginXS,a,n.padding,h,new S.t(h).setA(.75).toHexString(),a,a,n.colorWhite,a,new S.t(h).setA(.75).toHexString(),a,a,new S.t(h).setA(.75).toHexString(),a,a,a,a,new S.t(h).setA(.6).toHexString(),a,a,a)})},I=N,O=function(n){var u=(0,v.tx)(),a=(0,v.TH)(),h=a.pathname,p=(0,v.WF)(),o=p.themeConfig,f=(0,v.eL)(),m=f.frontmatter,l=function(){var A=typeof location!="undefined"?location.pathname.endsWith("-cn"):!1;return{llms:A?"\u5927\u8BED\u8A00\u6A21\u578B\u4E13\u7528\u6587\u6863":"large language models",llmsSemantic:A?"\u8BED\u4E49\u5316 DOM":"Semantic DOM"}},i=l();return(0,r.jsxs)("div",{className:"dumi-default-content","data-no-sidebar":!u||m.sidebar===!1||void 0,"data-no-footer":o.footer===!1||void 0,children:[(0,r.jsxs)("h1",{className:"section-title",children:[m.title," ",m.subtitle]}),h.startsWith("/components")&&!h.startsWith("/components/changelog")&&(0,r.jsx)("div",{className:"markdown",children:(0,r.jsxs)("blockquote",{style:{fontStyle:"normal"},children:[(0,r.jsxs)("p",{children:[i.llms,":",(0,r.jsxs)("a",{href:"".concat(h,".md"),target:"_blank",rel:"noreferrer",children:[(0,r.jsx)(g.Z,{style:{margin:4}}),"LLMs.md"]})]}),(0,r.jsxs)("p",{children:[i.llmsSemantic,":",(0,r.jsxs)("a",{href:"".concat(h,"/semantic.md"),target:"_blank",rel:"noreferrer",children:[(0,r.jsx)(g.Z,{style:{margin:4}}),"semantic.md"]})]})]})}),n.children,(0,r.jsx)(I,{})]})},R=O},60020:function(M,x,e){e.d(x,{Z:function(){return S}});var g=e(32926),v=e(6226),P=e(10960),D=e(67294),t=e(85893);function S(){var j=(0,P.YB)(),c=function(d){return j.formatMessage({id:d})};return(0,t.jsxs)("footer",{id:"footer",className:"custom-footer",children:[(0,t.jsx)("div",{className:"footer-wrap",children:(0,t.jsxs)(g.Z,{children:[(0,t.jsx)(v.Z,{lg:6,sm:24,xs:24,children:(0,t.jsxs)("div",{className:"footer-center",children:[(0,t.jsx)("h2",{children:"Ant Design"}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/ant-design-mobile-rn",children:"Ant Design Mobile RN GitHub"})}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/ant-design-mobile",children:"Ant Design Mobile GitHub"})}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ant.design",children:"Ant Design"})}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pro.ant.design",children:"Ant Design Pro"})}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/react-component",children:"React Component GitHub"})})]})}),(0,t.jsx)(v.Z,{lg:6,sm:24,xs:24,children:(0,t.jsxs)("div",{className:"footer-center",children:[(0,t.jsx)("h2",{children:c("app.footer.links")}),(0,t.jsxs)("div",{children:[(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://motion.ant.design",children:"Ant Motion"}),(0,t.jsx)("span",{children:" - "}),c("app.footer.motion")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://ux.ant.design",children:"Ant UX"}),(0,t.jsx)("span",{children:" - "}),c("app.footer.antux")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://library.ant.design/",children:"AntD Library"}),(0,t.jsx)("span",{children:" - "}),c("app.footer.antd-library")]})]})}),(0,t.jsx)(v.Z,{lg:6,sm:24,xs:24,children:(0,t.jsxs)("div",{className:"footer-center",children:[(0,t.jsx)("h2",{children:c("app.footer.community")}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://gitter.im/ant-design/ant-design",children:c("app.footer.discuss")})}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://github.com/ant-design/ant-design-mobile/issues",children:c("app.footer.bug-report")})})]})}),(0,t.jsx)(v.Z,{lg:6,sm:24,xs:24,children:(0,t.jsxs)("div",{className:"footer-center",children:[(0,t.jsxs)("h2",{children:[(0,t.jsx)("img",{className:"title-icon",src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:""}),c("app.footer.more-product")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ant.design",children:"Ant Design"}),(0,t.jsx)("span",{children:" - "}),c("app.footer.ant-design")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://antv.alipay.com/",children:"AntV"}),(0,t.jsx)("span",{children:" - "}),c("app.footer.data-vis")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://eggjs.org/",children:"Egg"}),(0,t.jsx)("span",{children:" - "}),c("app.footer.eggjs")]})]})})]})}),(0,t.jsx)(g.Z,{className:"bottom-bar",children:(0,t.jsx)(v.Z,{lg:24,sm:24,children:(0,t.jsxs)("div",{className:"bottom-bar-content",children:[(0,t.jsx)("span",{className:"privacy-link",children:(0,t.jsx)("a",{href:"https://docs.alipay.com/policies/privacy/antfin",rel:"noopener noreferrer",target:"_blank",children:c("app.footer.privacy")})}),(0,t.jsx)("span",{className:"commitment-link",children:(0,t.jsx)("a",{href:"https://render.alipay.com/p/f/fd-izto3cem/index.html",rel:"noopener noreferrer",target:"_blank",children:c("app.footer.commitment")})}),(0,t.jsx)("span",{className:"icp-text",children:"ICP \u8BC1\u6D59 B2-2-100257"}),(0,t.jsxs)("span",{className:"copyright-text",children:["Copyright \xA9 ",c("app.footer.company")]})]})})})]})}},28210:function(M,x,e){e.d(x,{Z:function(){return m}});var g=e(9783),v=e.n(g),P=e(97857),D=e.n(P),t=e(5574),S=e.n(t),j=e(60532),c=e(28214),r=e(71577),d=e(48597),N=e(29785),I=e(17142),O=e(93967),R=e.n(O),b=e(10960),n=e(2748),u=e(67294);function a(l){return/-cn\/?$/.test(l)}function h(l,i){var s=l.startsWith("/")?l:"/".concat(l);if(i){if(s==="/")return"/index-cn";if(s.endsWith("/"))return s.replace(/\/$/,"-cn/")}else return/\/?index-cn/.test(s)?"/":s.replace("-cn","");return"".concat(s,"-cn")}function p(){if(typeof window=="undefined")return!1;var l="test",i=window.localStorage;try{return i.setItem(l,"1"),i.removeItem(l),!0}catch(s){return!1}}var o=e(85893),f=e(4147).i8;function m(){var l=(0,b.TH)(),i=l.pathname,s=(0,b.YB)(),A=(0,b.WF)(),E=A.themeConfig,F=(0,u.useState)(!1),U=S()(F,2),T=U[0],B=U[1],L=(0,u.useState)("horizontal"),w=S()(L,2),y=w[0],k=w[1],Z=s.locale,H=Z==="zh-CN";(0,u.useEffect)(function(){var C=e(24974);C.register("only screen and (min-width: 0) and (max-width: 992px)",{match:function(){return k("inline")},unmatch:function(){return k("horizontal")}})},[]);var V=(0,u.useCallback)(function(){p()&&localStorage.setItem("locale",H?"en-US":"zh-CN");var C="".concat(window.location.protocol,"//"),W=window.location.href.slice(C.length);window.location.href=C+W.replace(window.location.pathname,h(i,!H))},[i,H]),z=(0,u.useCallback)(function(C){var W=window.location.href;window.location.href=W.replace(window.location.origin,C)},[]),K=D()(D()({},(E==null?void 0:E.docVersions)||{}),{},v()({},f,f)),Y=Object.keys(K).map(function(C){return{value:K[C],label:C}}),J=i.replace(/(^\/|\/$)/g,"").split("/").slice(0,-1).join("/"),G=J||"home";(G==="components"||i.includes("changelog"))&&(G="docs/react");var Q=R()({clearfix:!0,"custom-header":!0}),X=[(0,o.jsx)(c.Z,{className:"version",size:"small",dropdownMatchSelectWidth:!1,defaultValue:f,onChange:z,options:Y,getPopupContainer:function(W){return W.parentNode}},"version"),(0,o.jsx)(r.ZP,{type:"default",size:"small",onClick:V,className:"header-lang-button",children:s.formatMessage({id:"app.header.lang"})},"lang-button")],q=[{key:"home",label:(0,o.jsx)(b.rU,{to:h("/",H),children:s.formatMessage({id:"app.header.menu.home"})})},{key:"docs/react",label:(0,o.jsx)(b.rU,{to:h("/docs/react/introduce",H),children:s.formatMessage({id:"app.header.menu.components"})})},{key:"web",label:(0,o.jsx)("a",{href:"//mobile.ant.design",children:s.formatMessage({id:"app.header.menu.web"})})},{key:"docs/react/support",label:(0,o.jsx)(d.Z,{title:"Coming Soon",children:(0,o.jsx)(b.rU,{to:"#",children:"AI+ \u2728"})})},{key:"pc",label:(0,o.jsx)("a",{href:"https://github.com/ant-design/ant-design-mobile-rn",children:"github"})}],$=[(0,o.jsx)(N.Z,{className:"menu-site",mode:y,selectedKeys:[G],items:q,onClick:function(){return B(!1)},id:"nav"},"nav")];return(0,o.jsxs)("header",{id:"header",className:Q,children:[y==="inline"?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:"nav-phone-icon","aria-label":"\u6253\u5F00\u5BFC\u822A\u83DC\u5355",onClick:function(){return B(!0)},children:(0,o.jsx)(j.Z,{})}),(0,o.jsx)(I.Z,{title:null,placement:"right",closable:!0,onClose:function(){return B(!1)},open:T,className:"mobile-menu-drawer",children:(0,o.jsxs)("div",{className:"mobile-menu-content",children:[(0,o.jsx)("div",{className:"mobile-menu-actions",children:X}),$]})})]}):null,(0,o.jsxs)("div",{className:"header-row",children:[(0,o.jsxs)("div",{className:"header-left",children:[(0,o.jsxs)(b.rU,{to:h("/",H),id:"logo",children:[(0,o.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}),(0,o.jsx)("span",{className:"logo-title",children:"Ant Design Mobile RN"})]}),(0,o.jsx)("div",{id:"search-box",children:(0,o.jsx)(n.ZP,{})})]}),y==="horizontal"&&(0,o.jsxs)("div",{className:"header-right",children:[$,(0,o.jsx)("div",{className:"header-actions",children:X})]})]})]})}},25770:function(M,x,e){e.d(x,{Z:function(){return h}});var g=e(5574),v=e.n(g),P=e(29785),D=e(17142),t=e(6226),S=e(60532),j=e(67294),c=e(66090),r=e(10960),d=e(85893);function N(p){return p.replace(/(-cn$)/g,"")}function I(p){return p.includes("-cn")?"cn":"en"}var O={cn:{deprecated:"\u5E9F\u5F03",archive:"\u5F52\u6863",update:"\u6709\u66F4\u65B0"},en:{deprecated:"DEPRECATED",archive:"ARCHIVE",update:"UPDATE"}},R=function(o,f){switch(o==null?void 0:o.toUpperCase()){case"DEPRECATED":return(0,d.jsx)(c.Z,{color:"red",children:f||o});case"ARCHIVE":return(0,d.jsx)(c.Z,{color:"gold",style:{opacity:.6},children:f||o});case"UPDATE":return(0,d.jsx)(c.Z,{color:"green",style:{opacity:.6},children:f||o});default:return}};function b(p,o){var f,m=p.frontmatter||{},l=m.version,i=m.tag,s=m.subtitle,A=I(p.link),E=i&&((f=O[A])===null||f===void 0?void 0:f[i.toLowerCase()]);return(0,d.jsx)(r.rU,{to:"".concat(p.link).concat(o),children:(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:p.title}),s&&(0,d.jsx)("span",{style:{marginLeft:6,opacity:.6},children:s})]}),(0,d.jsxs)("div",{style:{transform:"scale(0.9)"},children:[R(i,E),l&&(0,d.jsx)(c.Z,{color:"green",style:{opacity:.8},children:l})]})]})})}function n(){var p=(0,r.yh)(),o=(0,r.TH)(),f=o.pathname,m=o.search,l=p,i=(0,j.useMemo)(function(){var s=[],A=[],E=[];Object.entries(l).forEach(function(U){var T=v()(U,2),B=T[0],L=T[1];B.startsWith("/docs/react")&&L.forEach(function(w){var y;(y=w.children)===null||y===void 0||y.forEach(function(k){s.push({key:N(k.link),label:b(k,m)})})}),B.startsWith("/docs/blog")&&L.forEach(function(w){var y;(y=w.children)===null||y===void 0||y.forEach(function(k){A.push({key:N(k.link),label:b(k,m)})})}),B.startsWith("/components")&&L.forEach(function(w){var y;if(!w.title){var k;(k=w.children)===null||k===void 0||k.forEach(function(Z){s.push({key:N(Z.link),label:b(Z,m)})});return}E.push({key:"components-".concat(w.title),type:"group",label:w.title,children:((y=w.children)===null||y===void 0?void 0:y.map(function(Z){return{key:N(Z.link),label:b(Z,m)}}))||[]})})});var F=[];return F.push.apply(F,s),A.length&&F.push({key:"Blog",label:"Blog",children:A}),E.length&&F.push({key:"Components",label:"Components",children:E}),F},[l,f,m]);return[i,N(f)]}function u(p){return p.map(function(o){return o.type==="group"?{type:"group",key:o.key,label:o.label,children:o.children?u(o.children):void 0}:o.children?{key:o.key,label:(0,d.jsx)("h4",{children:o.label}),children:u(o.children)}:{key:o.key,label:o.label}})}var a=function(){var o=(0,j.useState)(!1),f=v()(o,2),m=f[0],l=f[1],i=(0,j.useState)("horizontal"),s=v()(i,2),A=s[0],E=s[1],F=n(),U=v()(F,2),T=U[0],B=U[1],L=(0,j.useMemo)(function(){return T.filter(function(z){return z.children}).map(function(z){return z.key})},[T]),w=(0,j.useState)(L),y=v()(w,2),k=y[0],Z=y[1];(0,j.useEffect)(function(){Z(L)},[L.join(",")]),(0,j.useEffect)(function(){var z=e(24974);z.register("only screen and (min-width: 0) and (max-width: 992px)",{match:function(){return E("inline")},unmatch:function(){return E("horizontal")}})},[]);var H=(0,j.useMemo)(function(){return u(T)},[T]),V=(0,d.jsx)(P.Z,{mode:"inline",inlineIndent:24,selectedKeys:[B],openKeys:k,onOpenChange:function(K){return Z(K)},items:H});return A==="inline"?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(S.Z,{className:"sidebar-mobile-icon",onClick:function(){return l(!0)}}),(0,d.jsx)(D.Z,{title:null,placement:"left",closable:!0,onClose:function(){return l(!1)},open:m,children:V})]}):(0,d.jsx)(t.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:"dumi-sidebar-main-menu",children:V})},h=a},45356:function(M,x,e){e.d(x,{Z:function(){return g.Z}});var g=e(43758)},95044:function(M,x,e){e.d(x,{Z:function(){return g.Z}});var g=e(22607)},86225:function(M,x,e){e.d(x,{Z:function(){return g.Z}});var g=e(49422)},21521:function(M,x,e){e.d(x,{Z:function(){return g.Z}});var g=e(94059)},47727:function(M,x,e){e.d(x,{Z:function(){return g.Z}});var g=e(85198)},26687:function(M,x,e){e.d(x,{Z:function(){return g.Z}});var g=e(69142)},4147:function(M){M.exports={i8:"5.4.3"}}}]);
