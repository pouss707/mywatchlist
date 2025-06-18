import left from '../assets/left.png'
import right from '../assets/right.png'

function Slider() {
  return (
    <div>
            <div className="flex justify-start items-center w-fit h-fit ml-3">
                <div className="border-2 rounded-4xl bg-white w-230 h-150 flex justify-center items-center ml-18 mt-15"></div>
                <div className="absolute flex justify-between items-center w-100 h-50 gap-222 top-81 left-5 ">
                    <img
                        className="w-20 h-18 cursor-pointer "
                        src={left}
                        alt="left"
                    />
                    <img
                        className="w-20 h-18 cursor-pointer"
                        src={right}
                        alt="right"
                    />
                </div>
            </div>
    </div>
  )
}

export default Slider