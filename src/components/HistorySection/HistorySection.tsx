import HistorySectionStyled from "./HistorySectionStyled";

const HistorySection = (): React.ReactElement => {
  return (
    <HistorySectionStyled className="history" id="history">
      <div className="history__element-container ">
        <h1 className="history__heading">History</h1>
      </div>
      <div className="history__element-container history__element-container--info">
        <p className="history__info">
          Our company has been in the long-term accommodation sector for more
          than 15 years in which we have contributed to improve the lives of
          many people by offering a good service with a competitive price. In
          2017, we decided to expand our offer in the holiday sector with the
          mission of offering better quality services than the existing one in
          the market. We always want the experience of staying with us to be
          different and superior. All our accommodations are decorated and
          serviced in the most elegant way possible and, therefore, our brand
          has obtained the best recognition that can be achieved: that of our
          customers. Since our opening, we have accumulated positive comments on
          different platforms, which confirms that our great effort makes sense
          and we want to continue working on that path as a commitment
        </p>
      </div>
    </HistorySectionStyled>
  );
};

export default HistorySection;
