import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
        //console.log('Menu Component constructor is invoked');
    }

    /* componentDidMount() {
        console.log('Menu Component componentDidMount is invoked');
    } */

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderComments(dish) {

        if (dish && dish.comments != null)
            return (
                <div className="col-12 col-md">
                    <h4>Comments</h4>

                    {dish.comments.map((comment) => {
                        const commentDate = new Date(comment.date);
                        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        return (
                            <div key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {months[commentDate.getMonth()]} {commentDate.getDate()}, {commentDate.getFullYear()}</p>
                            </div>
                        );
                    })}

                </div>
            );
        else
            return (
                <div></div>
            );

    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        //console.log('Menu Component render is invoked');

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail selectedDish={this.state.selectedDish} />
                    {this.renderComments(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;