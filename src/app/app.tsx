import { Toolbar } from '@/components/tool-bar';

function App() {
  const playMovie = () => alert('Playing!');

  const uploadImage = () => alert('Uploading!');

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center text-4xl font-extrabold dark:text-white">Hello React</h1>
      <div className="flex justify-center mt-8">
        <Toolbar onPlayMovie={playMovie} onUploadImage={uploadImage} />
      </div>
    </div>
  );
}

export default App;
