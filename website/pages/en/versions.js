/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;

const CWD = process.cwd();

const siteConfig = require(`${CWD}/siteConfig.js`);
const versions = require(`${CWD}/versions.json`);

function Versions(props) {
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  // const language = 'en'
  const language = '';
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
            <blockquote>
              <p>
                Software releases and versions follow the {}
                <a
                  href={`${siteConfig.baseUrl}docs/${language}ecosystem/versioning`}
                >
                  ORY Versioning Framework
                </a>
                . Please read it now if you have not already, it will save you a
                lot of time.
              </p>
            </blockquote>
          </header>
          <h3 id="latest">Current version (Stable)</h3>
          <p>Latest version.</p>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <a href={`${siteConfig.baseUrl}docs/${language}index`}>
                    Documentation
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 id="rc">Latest Version</h3>
          Here you can find the latest documentation and unreleased code.
          <table className="versions">
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  <a href={`${siteConfig.baseUrl}docs/${language}next/index`}>
                    Documentation
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 id="archive">Past Versions</h3>
          <p>Here you can find documentation for previous versions.</p>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  version !== latestVersion && (
                    <tr key={version}>
                      <th>{version}</th>
                      <td>
                        <a
                          href={`${siteConfig.baseUrl}docs/${language}${version}/index`}
                        >
                          Documentation
                        </a>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
          <p>
            You can find past versions of this project on{' '}
            <a href={`${repoUrl}/releases`}>GitHub</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}

Versions.title = 'Versions';

module.exports = Versions;
