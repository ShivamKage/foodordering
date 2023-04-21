import { useState } from "react";

const Section = ({ heading, text, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black mt-4 p-2">
      <h1 className="text-2xl">{heading}</h1>
      {isVisible ? (
        <button
          className="underline bg-cyan-100"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="underline bg-cyan-100"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}

      {isVisible && <p>{text}</p>}
    </div>
  );
};

const Instamart = () => {
  const [isvisibleSection, setIsVisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-3xl">Instamart</h1>
      <Section
        heading={"About"}
        text={
          "There are a number of reasons you may need a block of text and when you do, a random paragraph can be the perfect solution. If you happen to be a web designer and you need some random text to show in your layout, a random paragraph can be an excellent way to do this. If you're a programmer and you need random text to test the program, using these paragraphs can be the perfect way to do this. Anyone who's in search of realistic text for a project can use one or more of these random paragraphs to fill their need."
        }
        isVisible={isvisibleSection === "About"}
        setIsVisible={(data) =>
          data ? setIsVisibleSection("About") : setIsVisibleSection("")
        }
      />
      <Section
        heading={"Team"}
        text={
          "There are a number of reasons you may need a block of text and when you do, a random paragraph can be the perfect solution. If you happen to be a web designer and you need some random text to show in your layout, a random paragraph can be an excellent way to do this. If you're a programmer and you need random text to test the program, using these paragraphs can be the perfect way to do this. Anyone who's in search of realistic text for a project can use one or more of these random paragraphs to fill their need."
        }
        isVisible={isvisibleSection === "Team"}
        setIsVisible={(data) =>
          data ? setIsVisibleSection("Team") : setIsVisibleSection("")
        }
      />
      <Section
        heading={"Career"}
        text={
          "There are a number of reasons you may need a block of text and when you do, a random paragraph can be the perfect solution. If you happen to be a web designer and you need some random text to show in your layout, a random paragraph can be an excellent way to do this. If you're a programmer and you need random text to test the program, using these paragraphs can be the perfect way to do this. Anyone who's in search of realistic text for a project can use one or more of these random paragraphs to fill their need."
        }
        isVisible={isvisibleSection === "Career"}
        setIsVisible={(data) =>
          data ? setIsVisibleSection("Career") : setIsVisibleSection("")
        }
      />
    </div>
  );
};
export default Instamart;
