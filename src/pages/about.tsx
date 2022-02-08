import Aboutme from '../components/About/Aboutme';
import Education from '../components/About/Education';
import Skills from '../components/About/Skills';

const AboutPage = ({ skills }: any) => {
  return (
    <main>
      <Aboutme />
      <Education />
      <Skills skills={skills} />
    </main>
  );
};

export function getStaticProps() {
  return {
    props: {
      skills: [
        {
          name: 'JavaScript',
          level: 'amazing',
        },
        {
          name: 'React',
          level: 'amazing',
        },
        {
          name: 'HTML5',
          level: 'amazing',
        },
        {
          name: 'CSS3',
          level: 'good',
        },
        {
          name: 'jQuery',
          level: 'good',
        },
        {
          name: 'NodeJS',
          level: 'good',
        },
        {
          name: 'VueJS',
          level: 'good',
        },
      ],
    },
  };
}

export default AboutPage;
