import React from "react";
import Axios from "axios";
import { Form, FormGroup, FormText } from "reactstrap";
import Loader from "../Icons/Eclipse";

class ImageUpload extends React.Component {
  state = {
    show: false,
    imageFile: null,
    previewImage: null,
    isloading: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleFileSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", this.state.imageFile);
    const jwt = localStorage.getItem("userToken");
    // console.log(e.target.files[0]);
    Axios.post("https://insta.nextacademy.com/api/v1/images/", formData, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          imageFile: null,
          previewImage: "",
          isloading: false
        });
        this.props.userImageRecall();
        this.fileInput.value = null;
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log(error.response);
      });
  };

  handleFile = e => {
    this.setState({
      previewImage: URL.createObjectURL(e.target.files[0]),
      imageFile: e.target.files[0]
    });
  };

  render() {
    const { imageFile, previewImage, isloading } = this.state;
    return (
      <>
        {isloading ? <Loader width="200" height="200" /> : null}
        <div className="d-flex justify-content-center">
          <Form onSubmit={e => this.handleFileSubmit(e)}>
            <FormGroup>
              <input
                type="file"
                name="image-file"
                onChange={e => this.handleFile(e)}
                ref={r => {
                  this.fileInput = r;
                }}
              />
            </FormGroup>
            <FormText color="muted">
              Make sure the image being uploaded is a supported format.
            </FormText>

            <div className="d-block" width="300vw" height="300vw">
              <div className="d-block" width="300vw" height="300vw">
                <img src={previewImage} alt="" />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={imageFile ? false : true}
            >
              Upload
            </button>
          </Form>
        </div>
      </>
    );
  }
}
export default ImageUpload;
