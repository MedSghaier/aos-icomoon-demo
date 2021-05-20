import IconWebFont from "./components/icon-wf/icon.component";
import IconFromList from "./components/ico-s/icon.component";
function App() {
  return (
    <div className="container mx-auto">
      {/* Icon Componet based on the icomoon component */}
      {/* This icon can be styled using text CSS propperties : font-size | color | line-height... */}
      <div className="flex justify-center gap-4 mb-10">
        <IconWebFont
          className="text-red-500 text-xl col-auto"
          icoClassName="alarm-fill"
        ></IconWebFont>
        <IconWebFont
          className="text-yellow-500 text-xl col-auto"
          icoClassName="archive"
        ></IconWebFont>
        <IconWebFont
          className="text-green-500 text-xl col-auto"
          icoClassName="arrow-counterclockwise"
        ></IconWebFont>
        <IconWebFont
          className="text-blue-500 text-xl col-auto"
          icoClassName="arrow-down"
        ></IconWebFont>
        <IconWebFont
          className="text-indigo-500 text-xl col-auto"
          icoClassName="bank"
        ></IconWebFont>
        <IconWebFont
          className="text-purple-500 text-xl col-auto"
          icoClassName="bar-chart-fill"
        ></IconWebFont>
        <IconWebFont
          className="text-pink-500 text-xl col-auto"
          icoClassName="bell-fill"
        ></IconWebFont>
        <IconWebFont
          className="text-xl col-auto"
          icoClassName="book-half"
        ></IconWebFont>
      </div>
      {/* Basic icon usage */}

      {/* Used inside a button */}
      <div className="flex justify-center mb-10">
        <button className="inline-flex justify-center items-center min-w-150 h-9 px-5 bg-blue-500 rounded-full text-sm text-white">
          <IconWebFont icoClassName="alarm-fill" className="mr-4" />
          <span>Wake up</span>
        </button>

        {/* Hover effect */}
        <button className="group inline-flex justify-center items-center min-w-150 h-9 px-5 bg-blue-500 rounded-full text-sm text-white hover:bg-red-300 transition duration-500 ease-in-out">
          <IconWebFont
            icoClassName="alarm-fill"
            className="mr-4 transform transition duration-200 ease-in-out block group-hover:text-purple-700 "
          />
          <span>Wake up</span>
        </button>
      </div>

      <div className="flex justify-center items-baseline gap-4">
        {/* This icon is rendered as svg and ce be styled using IcoMoon given props : color | size */}
        {/* The color prop is used to fill the svg path -> must used text-color & fill with current color */}
        <IconFromList icon="bell-fill" className="text-red-500 fill-current" size="12px"></IconFromList>
        <IconFromList icon="bell-fill" className="text-yellow-500 fill-current" size="14px"></IconFromList>
        <IconFromList icon="bell-fill" className="text-green-500 fill-current" size="16px"></IconFromList>
        <IconFromList icon="bell-fill" className="text-blue-500 fill-current" size="18px"></IconFromList>
        <IconFromList icon="bell-fill" className="text-indigo-500 fill-current" size="24px"></IconFromList>
        <IconFromList icon="bell-fill" className="text-purple-500 fill-current" size="28px"></IconFromList>
        <IconFromList icon="bell-fill" className="text-pink-500 fill-current" size="32px"></IconFromList>
        <IconFromList icon="bell-fill" className="text-pink-500 fill-current" size="48px"></IconFromList>
      </div>
    </div>
  );
}

export default App;
