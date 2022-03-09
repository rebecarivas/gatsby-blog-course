import styled from "styled-components"
import media from "styled-media-query"

export const AboutWrapper = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;
`

export const AboutTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`
export const AboutContent = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  text-align: justify;
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;

  ${media.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
  `}
`
export const AboutSubTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan("large")`
    font-size: 2rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`
