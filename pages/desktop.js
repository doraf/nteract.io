// @flow
import Layout from "../components/layout/layout";
import ContentSection from "../components/content-section/content-section";
import React from "react";

import {
  PageHeader,
  PageHeaderLeft,
  PageHeaderRight
} from "../components/page-header/page-header";

import { DownloadFeaturette } from "../components/download-buttons";

const OpenNotebooksFeature = () => (
  <ContentSection>
    <div className="panes center-vertically">
      <div className="pane-30 pane">
        <h3>Double Click</h3>
        <p>Open notebooks natively on Mac, Windows, and Linux</p>
      </div>
      <div className="pane-70 pane">
        <div className="section-graphic">
          <video
            style={{
              boxShadow: "0 4px 14px 0 rgba(0,0,0,.1)",
              transform: "translateX(50px)"
            }}
            src="/static/double-click-notebook.mp4"
            autoPlay
            loop
          />
        </div>
      </div>
    </div>
  </ContentSection>
);

const DesktopHeader = () => (
  <PageHeader color="#244d64">
    <PageHeaderLeft>
      <h1>
        Notebooks on your desktop
      </h1>

      <p>
        Write code, prose, and embed interactive plots to tell powerful narratives.
        Explore computing creatively. All the power of Jupyter notebooks,
        wrapped in native desktop goodness.
      </p>

      <div className="mobile-only hero-mobile-message">
        <h4>Connect with us</h4>
      </div>

      <DownloadFeaturette platform="macOS" />

    </PageHeaderLeft>
    <PageHeaderRight>
      <img
        src="https://cloud.githubusercontent.com/assets/836375/18421299/d95ad398-783b-11e6-8b23-d54cf7caad1e.png"
        alt=""
        className="cutoff-image"
      />
    </PageHeaderRight>
  </PageHeader>
);

export default class DesktopPage extends React.Component {
  static async getInitialProps(ctx: Context<*>) {
    console.log(ctx);
  }

  render() {
    return (
      <Layout pageTitle=": The nteract Desktop App">
        <DesktopHeader />
        <OpenNotebooksFeature />
      </Layout>
    );
  }
}
