import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function EditBug() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center">Edit Bug</h1>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
      {/* <form
        action={"/bugs/" + bug._id + "?_method=PUT"}
        method="POST"
        novalidate
        class="validated-form"
        enctype="multipart/form-data"
      >
        <label class="form-label" for="name">
          Name
        </label>
        <input
          class="form-control"
          type="text"
          id="name"
          name="bug[name]"
          value={bug.name}
          required
        />
        <div class="mb-3">
          <label class="form-label" for="location">
            Location
          </label>
          <input
            class="form-control"
            type="text"
            id="location"
            name="bug[location]"
            value="<%= bug.location %>"
            required
          />
          <div class="valid-feedback">Looks fine!</div>
        </div>
        <label class="form-label fst" for="sciName">
          👨‍🔬Scientific Name?👩‍🔬
        </label>
        <input
          class="form-control fst-italic"
          type="text"
          id="sciName"
          name="bug[sciName]"
          value={bug.sciName}
        />
        <div class="valid-feedback">Looks fine!</div>
        <div class="mb-3 col-6 offset-3">
          <label class="form-label " for="description">
            Description
          </label>
          <textarea
            class="form-control form-control-sm "
            type="text"
            id="description"
            name="bug[description]"
            rows="5"
            required
          >
            {bug.description}
          </textarea>
          <div class="valid-feedback">Looks fine!</div>
        </div>

        <div class="mb-3 col-6 offset-3">
          <div class="form-file custom-file">
            <label for="image" class="form-label custom-file-label">
              Add More Images
            </label>
            <input
              class="form-control"
              type="file"
              id="image"
              multiple
              name="image"
            />
          </div>
        </div>

        <div class="mb-3 col-6 offset-3">
          <img src={img.thumbnail} alt="" class="img-thumbnail"></img>
          <div class="form-check-inline">
            <input
              type="checkbox"
              name="deleteImages[]"
              value={img.filename}
              id={i}
            >
              {" "}
            </input>
            <label for={i}>Delete?</label>
            <div class="mb-3 col-6 offset-3">
              <button class="btn btn-info">UPDATE BUG!</button>
            </div>
          </div>
        </div>
      </form>
      <a href={"/bugs/" + bug._id}>Back To Bugs!</a>{" "} */}
    </>
  );
}
