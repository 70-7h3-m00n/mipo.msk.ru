import Contact from '@/components/pages/Contact';
import getData, { PagesData } from '@/services/getData';

const ContactPage = () => {
  return <Contact />;
};

export const getStaticProps = getData(PagesData.contact);

export default ContactPage;
