import React from "react";
import { Link } from "react-router-dom";

class FeedbackCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback_categories: []
        };
    }

    componentDidMount() {
        const url = "/api/v1/feedback_categories/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ feedback_categories: response }))
            .catch(() => this.props.history.push("/"));
    }

    render() {
        const { feedback_categories } = this.state;
        const allFeedbackCategories = feedback_categories.map((feedback_category, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">
                    {/*<img*/}
                    {/*    src={}*/}
                    {/*    className="card-img-top"*/}
                    {/*    alt={`${feedback_category.category_name} image`}*/}
                    {/*/>*/}
                    <div className="card-body">
                        <h5 className="card-title">{feedback_category.category_name}</h5>
                        <Link to={`/feedback_categories/${feedback_category.id}`} className="btn custom-button">
                            View Feedback Category
                        </Link>
                    </div>
                </div>
            </div>
        ));
        const noFeedbackCategory = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                    No feedback categories yet. Why not <Link to="/new_category">create one</Link>
                </h4>
            </div>
        );

        return (
            <>
                <section className="jumbotron jumbotron-fluid text-center">
                    <div className="container py-5">
                        <h1 className="display-4">Feedback categories for every occasion</h1>
                        <p className="lead text-muted">
                            We’ve pulled together our most popular recipes, our latest
                            additions, and our editor’s picks, so there’s sure to be something
                            tempting for you to try.
                        </p>
                    </div>
                </section>
                <div className="py-5">
                    <main className="container">
                        <div className="text-right mb-3">
                            <Link to="/feedback_category" className="btn custom-button">
                                Create New Recipe
                            </Link>
                        </div>
                        <div className="row">
                            {feedback_categories.length > 0 ? allFeedbackCategories : noFeedbackCategory}
                        </div>
                        <Link to="/" className="btn btn-link">
                            Home
                        </Link>
                    </main>
                </div>
            </>
        );
    }
}
export default FeedbackCategories;