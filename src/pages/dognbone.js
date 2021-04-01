import React from 'react';

import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

const Dognbone = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {' '}
        Dog&bone{' '}
      </Title>
      <p>
        IDK.
      </p>
    </Box>
  </Layout>
);

Dognbone.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Dognbone;

export const query = graphql`
  query DognboneQuery {
    dognboneJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
