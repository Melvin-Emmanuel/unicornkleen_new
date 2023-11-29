

const AddProducts = () => {
    return (
      <main className="p-4 pl-72  md:ml-64 h-auto pt-36">
        <form className="h-[80vh] w-[90%] border-2 border-gray-60 rounded-lg md:mt-10 md:min-h-[95vh]">
          <h1 className="text-3xl text-gray-900 p-8 font-semibold">
            Create Blog Post
          </h1>
          <hr />

          <div className="w-full flex justify-between items-center">
            <div className="h-auto w-[40%] flex mt-6 flex-col mx-auto">
              <label htmlFor="Name" className="text-gray-600 font-medium mb-3">
               Blog Title
              </label>
              <input
                placeholder="blog title "
                className="h-10 w-[100%] focus:outline-none focus:border-blue-500 placeholder:pl-3 text-gray-500 rounded-lg outline-none border-2 border-gray-500"
                type="text"
                id="Name"
              />
            </div>
            <div className="h-auto w-[40%] flex mt-6 flex-col mx-auto">
              <label htmlFor="image" className="text-gray-600 font-medium mb-3">
               Blog post Image
              </label>
              <input
                className="h-10 w-[100%] cursor-pointer text-gray-500 rounded-lg outline-none border-1 border-gray-500"
                type="file"
                id="image"
              />
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
           
          </div>
          <div className="h-auto w-[90%] flex mt-6 flex-col mx-auto">
            <label
              htmlFor="Category"
              className="text-gray-600 font-medium mb-3"
            >
            Text
            </label>
            <textarea
              // placeholder="Enter blog text"
              className="h-20 w-[100%]  text-gray-500 rounded-lg ml-1 border-2 outline-none border-gray-500"
              // type="textarea"
              id="category"
            />
          </div>

          {/* <div className="w-full">
            <label
              htmlFor="description"
              className="text-gray-500 font-medium mb-3"
            >
              Desc
                    </label>
                <br />
            <input
              type="text"
              placeholder="Enter Description"
              className="w-[90%] mx-auto m-0 h-20 mt-5 outline-none border-2 border-gray-500 rounded lg  "
            />
          </div> */}

          <div className="w-[90%] mx-auto mt-8 flex gap-10">
            <button className="">Post</button>
            <div className="p-7 pt-5 pb-5  cursor-pointer bg-pink-500 rounded-lg">
              Reset
            </div>
          </div>
        </form>
      </main>
    );
}

export default AddProducts