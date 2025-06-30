import introVideo from '../../assets/videos/intro.webm'

export default function Speciality() {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-16 bg-white text-gray-900">
      
      {/* Kiri - Text dan Skills */}
      <div className="w-full md:w-1/2">
        <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-8">
          Driven by creativity and innovation at every step — I craft smarter solutions and push boundaries to reach new heights.
        </p>

        <div>
          <h3 className="text-base font-semibold mb-2 border-b w-fit border-gray-300">Skills</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {[
              "Photoshop", "Illustrator", "Web Development",
              "UI/UX", "Motion", "Backend", "Frontend", "Blockchain dev"
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-1.5 border border-gray-800 text-gray-800 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Kanan - Video */}
      <div className="w-full md:w-1/2 flex justify-center">
        <video
          src={introVideo}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl shadow-xl w-full h-auto max-w-md object-cover"
        />
      </div>
    </section>
  );
}
