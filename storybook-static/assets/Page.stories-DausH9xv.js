import{w as d,e as r,u}from"./index-BDOojamX.js";import{c as h}from"./Header-ZCDK7bkf.js";import"https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap";/* empty css               */const v=()=>{const e=document.createElement("article");let t=null;return t=h({}),e.appendChild(t),e.insertAdjacentHTML("beforeend",`
  <section class="storybook-page">
    <h2>Pages in Storybook</h2>
    <p>
      We recommend building UIs with a
      <a
        href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"
        target="_blank"
        rel="noopener noreferrer">
        <strong>component-driven</strong>
      </a>
      process starting with atomic components and ending with pages.
    </p>
    <p>
      Render pages with mock data. This makes it easy to build and review page states without
      needing to navigate to them in your app. Here are some handy patterns for managing page data
      in Storybook:
    </p>
    <ul>
      <li>
        Use a higher-level connected component. Storybook helps you compose such data from the
        "args" of child component stories
      </li>
      <li>
        Assemble data in the page component from your services. You can mock these services out
        using Storybook.
      </li>
    </ul>
    <p>
      Get a guided tutorial on component-driven development at
      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
        Storybook tutorials
      </a>
      . Read more in the
      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>
      .
    </p>
    <div class="tip-wrapper">
      <span class="tip">Tip</span>
      Adjust the width of the canvas with the
      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0
            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0
            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
            id="a"
            fill="#999" />
        </g>
      </svg>
      Viewports addon in the toolbar
    </div>
  </section>
`),e},B={title:"Example/Page",render:()=>v(),parameters:{layout:"fullscreen"}},n={},a={play:async({canvasElement:e})=>{const t=d(e),o=t.getByRole("button",{name:/Log in/i});await r(o).toBeInTheDocument(),await u.click(o),await r(o).not.toBeInTheDocument();const s=t.getByRole("button",{name:/Log out/i});await r(s).toBeInTheDocument()}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,g,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const k=["LoggedOut","LoggedIn"];export{a as LoggedIn,n as LoggedOut,k as __namedExportsOrder,B as default};
