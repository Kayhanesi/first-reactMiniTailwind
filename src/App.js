// import "index.css";

function App() {
  return (
    <div className=" sm:m-1 lg:m-10 bg-[#f7f7f7] font-mono border-4 border-black sm:w-11/12 lg:w-2/5">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

export default App;

function Avatar() {
  return (
    <div>
      <img
        className="w-full"
        src="/Pic/drew-beamer-Vc1pJfvoQvY-unsplash.jpg"
        alt="lol"
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1 className="p-4 sm:p-6 lg:p-8 pb-0 mb-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
        kayhan skanndari
      </h1>
      <p className="p-4 sm:p-6 lg:p-8 pt-4 sm:pt-5 lg:pt-6 text-base sm:text-lg lg:text-xl font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit
        accusamus eveniet necessitatibus? Blanditiis, vel quas. Quos et dicta
        consequatur numquam fugiat ipsa veritatis. Sint vitae suscipit nesciunt
        tempore sed!
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="flex flex-wrap justify-start gap-2 mt-4 pb-9 ml-1 sm:ml-8">
      <Skill name="HTML + CSS" emojy="💪" bgColor="bg-blue-500" />
      <Skill name="JavaScript" emojy="💪" bgColor="bg-yellow-500" />
      <Skill name="Web Design" emojy="💪" bgColor="bg-green-300" />
      <Skill name="Git and Github" emojy="👍" bgColor="bg-red-300" />
      <Skill name="Web Design" emojy="💪" bgColor="bg-blue-300" />
      <Skill name="Web Design" emojy="👶🏻" bgColor="bg-orange-700" />
    </div>
  );
}

function Skill(props) {
  console.log(props);
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-1 rounded-md font-extrabold ${props.bgColor}`}
    >
      <span>{props.name}</span>
      <span>{props.emojy}</span>
    </div>
  );
}
