import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderContainer, LoaderBackdrop } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderBackdrop>
      <LoaderContainer>
        <MagnifyingGlass
          visible={true}
          height="200"
          width="200"
          margin="0 auto"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#a4d4b4"
          color="#b96d40"
        />
      </LoaderContainer>
    </LoaderBackdrop>
  );
}
