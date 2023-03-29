export function ProductReviews({ reviews }) {
    if (reviews) {
        const userReviews = reviews.map((review) => {
            return (
                <div key={review.id}>
                    <h4>{review.username}</h4>
                    <i>{review.description}</i>
                </div>
            );
        });
        return (
            <div className="reviews">
                <h3>Reviews</h3>
                {userReviews.length > 0 ? userReviews : <p>This item has no reviews</p>}
            </div>
        );
    }
}
