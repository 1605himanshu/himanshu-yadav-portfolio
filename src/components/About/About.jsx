import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/i22.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[7vw] md:px-[10vw] lg:px-[20vw] font-sans text-center"
    >
      {/* Title & Name */}
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          Hi, I am
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Himanshu Yadav
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-[#8245ec] leading-tight">
          <span className="text-white">I am a </span>
          <ReactTypingEffect
            text={['Full Stack Developer', 'Coder']}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={(cursor) => (
              <span className="text-[#8245ec]">{cursor}</span>
            )}
          />
        </h3>
      </div>

      {/* Image with matching blue border */}
      <div className="flex justify-center mb-8">
        <Tilt
          className="w-96 h-72 transition-transform duration-500 hover:scale-105 rounded-lg border-4"
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          style={{ borderColor: '#8245ec' }}
        >
          <div className="w-full h-full overflow-hidden flex items-center justify-center rounded-lg">
            <img
              src={profileImage}
              alt="Himanshu Yadav"
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </Tilt>
      </div>

      {/* Paragraph */}
      <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-6 leading-relaxed">
        I’m a Full Stack Developer with hands-on experience in building scalable and interactive web applications. Proficient in both front-end and back-end development, I specialize in the MERN stack and modern web technologies to deliver seamless user experiences and efficient, high-performing solutions. I also have a strong foundation in Data Structures and Algorithms (DSA) using Java, which helps me write optimized and reliable code for complex problems.
      </p>

      {/* CV Button */}
      <div>
        <a
          href="https://drive.google.com/file/d/1OVJwL5Mivus4_X6AVu9BHw7arZvBBkF7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
};

export default About;
