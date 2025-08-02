// 🌀 Section for Contact
import PrimaryButton from '../components/ui/CreativeButton/PrimaryButton';
import SecondaryButton from '../components/ui/CreativeButton/SecondaryButton';
import MarqueAnimation from '../components/ui/Marque'
const ContactPage = () => {
  return (
    <section id="Contact" className="h-[200svh]">
      <div className="justify-center items-center h-screen w-[100svw] flex bg-main">
        <PrimaryButton>Contact</PrimaryButton>
        <SecondaryButton>Secondary Action</SecondaryButton>
      </div>
      <div className="justify-center items-center h-screen w-[100svw]">
        <MarqueAnimation />
      </div>
    </section>
  );
};

export default ContactPage;
