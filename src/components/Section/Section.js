import React from 'react';

import {Title} from './styledSection';

const Section = ({title, children}) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  )
}

export default Section;