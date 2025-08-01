// 🌀 Section for Contact
import MotionButton from '../components/ui/CreativeButton/CreativeButtonPrimary';
import SecondaryMotionButton from '../components/ui/CreativeButton/CreativeButtonSecondary';
const ContactPage = () => {
  return (
    <section id="Contact" className="h-[200svh] justify-center items-center flex gap-[3rem]">
      <MotionButton>Contact</MotionButton>
      <SecondaryMotionButton>Secondary Action</SecondaryMotionButton>
    </section>
  );
};

export default ContactPage;
