import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import defaultDeskPic from "../assets/defaultDeskPic.jpg";

// function CardData() {
//   const rtn = [
//     // {
//     //   title: "CARNATIONS",
//     //   desc:
//     //     "Carnations require well-drained, neutral to slightly alkaline soil, and full sun. Numerous cultivars have been selected for garden planting.[4] Typical examples include 'Gina Porto', 'Helen', 'Laced Romeo', and 'Red Rocket'.",
//     //   url:
//     //     "https://cdn.pixabay.com/photo/2017/07/24/02/40/pink-roses-2533389__340.jpg",
//     // },
//     {
//       timeAmount: "1 HOUR 30 MIN",
//       floorAndRoom: "Floor 15 Room 9-C",
//       timeFrom: "1:30pm",
//       timeTo: "3:30pm",
//       date: "TODAY, 23RD JAN",
//       picUrl: defaultDeskPic,
//     },
//     {
//       timeAmount: "2 HOUR",
//       floorAndRoom: "Floor 1 Room 4-D",
//       timeFrom: "9:30am",
//       timeTo: "11:00am",
//       date: "WEDNESDAY, 25TH JAN",
//       picUrl: "https://www.aver.com/Upload/Expert/31/Main.jpg",
//     },
//     {
//       timeAmount: "1 HOUR",
//       floorAndRoom: "Floor 5 Room 6",
//       timeFrom: "4:30pm",
//       timeTo: "5:30pm",
//       date: "FRIDAY, 27TH JAN",
//       picUrl:
//         "https://officesnapshots.com/wp-content/uploads/2019/12/conference-room-design-1-700x467.jpg",
//     },
//     {
//       timeAmount: "1 HOUR 30 MIN",
//       floorAndRoom: "Floor 12 Room 5-C",
//       timeFrom: "1:30pm",
//       timeTo: "3:00pm",
//       date: "SATURDAY, 28TH JAN",
//       picUrl:
//         "https://spaceiq.com/app/default/assets/images/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg?v=1579637066",
//     },
//   ];
//   return rtn;
// }

class Cards extends Component {
  render() {
    // const cardData = CardData();
    const cardData = this.props.cardData;
    return (
      <section>
        {cardData.map((card, i) => {
          return (
            <div
              className="card"
              id="card"
              style={this.props.cardStyle}
              key={i}
            >
              <Card
                timeAmount={card.timeAmount}
                floorAndRoom={card.floorAndRoom}
                timeFrom={card.timeFrom}
                timeTo={card.timeTo}
                date={card.date}
                picUrl={card.picUrl}
              />
            </div>
          );
        })}
      </section>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      position: 0,
      cardStyle: {
        transform: "translateX(0px)",
      },
      width: "0px",
      cardData: [
        {
          timeAmount: "1 HOUR 30 MIN",
          floorAndRoom: "Floor 15 Room 9-C",
          timeFrom: "1:30pm",
          timeTo: "3:30pm",
          date: "TODAY, 2ND DEC",
          picUrl: defaultDeskPic,
        },
        {
          timeAmount: "2 HOUR",
          floorAndRoom: "Floor 1 Room 4-D",
          timeFrom: "9:30am",
          timeTo: "11:00am",
          date: "THURSDAY, 3RD DEC",
          picUrl: "https://www.aver.com/Upload/Expert/31/Main.jpg",
        },
        {
          timeAmount: "1 HOUR 30 MIN",
          floorAndRoom: "Floor 12 Room 5-C",
          timeFrom: "1:30pm",
          timeTo: "3:00pm",
          date: "FRIDAY, 4TH DEC",
          picUrl:
            "https://spaceiq.com/app/default/assets/images/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg?v=1579637066",
        },
      ],
    };
  }

  componentDidMount() {
    let boxWidth = document.getElementById("card").clientWidth;
    this.setState({ width: boxWidth });
  }

  componentDidUpdate() {
    if (this.props.floorAndRoom) {
      const obj = {
        timeAmount: "1 HOUR",
        floorAndRoom: this.props.floorAndRoom,
        timeFrom: this.props.timeFrom,
        timeTo: this.props.timeTo,
        date:
          this.props.weekDay.toUpperCase() +
          ", " +
          this.props.dayOfMonth +
          " " +
          this.props.month.substring(0, 3).toUpperCase(),
        picUrl: this.props.picUrl,
      };
      if (this.state.cardData.length < 4) {
        this.setState({
          cardData: [...this.state.cardData, obj],
        });
      }
    }
  }

  // func: click the slider buttons
  handleClick(type) {
    // get the card's margin-right
    let margin = window.getComputedStyle(document.getElementById("card"))
      .marginRight;
    margin = JSON.parse(margin.replace(/px/i, ""));

    const cardWidth = this.state.width; // the card's width
    const cardMargin = margin; // the card's margin
    // const cardNumber = CardData().length; // the number of cards
    const cardNumber = this.state.cardData.length; // the number of cards
    let currentCard = this.state.currentCard; // the index of the current card
    let position = this.state.position; // the position of the cards

    // slide cards
    if (type === "next" && currentCard < cardNumber - 1) {
      currentCard++;
      position -= cardWidth + cardMargin;
    } else if (type === "prev" && currentCard > 0) {
      currentCard--;
      position += cardWidth + cardMargin;
    }
    this.setCard(currentCard, position);
  }

  setCard(currentCard, position) {
    this.setState({
      currentCard: currentCard,
      position: position,
      cardStyle: {
        transform: `translateX(${position}px)`,
      },
    });
  }

  render() {
    // const obj = {
    //   timeAmount: "1 HOUR",
    //   floorAndRoom: this.props.floorAndRoom,
    //   timeFrom: this.props.timeFrom,
    //   timeTo: this.props.timeTo,
    //   date: this.props.weekDay,
    //   picUrl: this.props.roomPicUrl,
    // };
    // this.setState({
    //   cardData: [...this.state.cardData, obj],
    // });
    console.log(this.state.cardData);
    console.log(this.props.timeFrom);
    return (
      <div className="cards-slider">
        <div className="slider-btns">
          <button
            className="slider-btn btn-l"
            onClick={() => this.handleClick("prev")}
          >
            &lt;
          </button>
          <button
            className="slider-btn btn-r"
            onClick={() => this.handleClick("next")}
          >
            &gt;
          </button>
        </div>
        <Cards
          cardStyle={this.state.cardStyle}
          cardData={this.state.cardData}
        />
      </div>
    );
  }
}

ReactDOM.render(<Display />, document.getElementById("root"));
export default Display;
