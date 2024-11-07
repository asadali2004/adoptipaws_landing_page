import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/Dog.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 border-t py-10 border-neutral-900" id="workflow">
      <div className="text-center">
      <span className=" bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          WorkFlow
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        How AdoptiPaws{" "}
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          wokrs
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 mt-12 rounded-sm">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
