// 🌀 Section for Contact
import MotionButton from '../components/ui/CreativeButton/CreativeButtonPrimary';
import SecondaryMotionButton from '../components/ui/CreativeButton/CreativeButtonSecondary';
import MarqueAnimation from '../components/ui/Marque'
const ContactPage = () => {
  return (
    <section id="Contact" className="h-[200svh]">
      <div className="justify-center items-center h-screen w-[100svw] flex bg-main">
        <MotionButton>Contact</MotionButton>
        <SecondaryMotionButton>Secondary Action</SecondaryMotionButton>
      </div>
      <div className="justify-center items-center h-screen w-[100svw]">
        <MarqueAnimation />
      </div>
    </section>
  );
};

export default ContactPage;
