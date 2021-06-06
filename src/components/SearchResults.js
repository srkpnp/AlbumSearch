import React, { Fragment, Component } from "react";
import { Waypoint } from "react-waypoint";
import PropTypes from "prop-types";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto",
    height: 300,
    flexGrow: 1
  },
  head: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    position: "sticky",
    fontSize: ".6rem",
    top: 0
  },
  table: {
    minWidth: 700,
    height: 200
  },
  tableCell: {
    fontSize: ".6rem"
  }
});

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      filteredMessages: []
    };
  }

  componentDidMount() {
    this.getMessages(0);
  }
  columns = [
    {
      name: "Id",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowIndex = tableMeta.rowIndex;
          const { filteredMessages } = this.state;

          if (rowIndex === filteredMessages.length - 10) {
            return (
              <Fragment>
                <Waypoint
                  onEnter={() => {
                    console.log("WAYPOINT REACHED");
                    
                    const newData = this.getData(
                      10,
                      filteredMessages.length
                    );
                    console.log('newData--->',newData);
                    console.log('filteredMessages--->',filteredMessages);
                    this.setState({
                      filteredMessages: [...filteredMessages, ...newData]
                    });
                  }}
                />
                {value}*
              </Fragment>
            );
          } else {
            return <Fragment>{value}</Fragment>;
          }
        }
      }
    },
    {
      name: "Artist Name"
    },
    {
      name: "collection Price"
    }
  ];

  options = {
    filter: false,
    filterType: "dropdown",
    responsive: "stacked",
    selectableRows: false,
    pagination: false,
    onRowClick(rowNode) {
      console.log(rowNode);
    }
  };

  /*eslint-disable */
  getData(count, startingIndex) {
    const data = this.props.searchResults;
    console.log('data--->',data);
    function createData(artistName, collectionPrice) {
      return [artistName, collectionPrice];
    }

    const rows = [];

    for (let i = 0; i < count; i += 1) {
      const randomSelection = data[Math.floor(Math.random() * data.length)];
      console.log('randomSelection--->',randomSelection);
      const id = i + 1 + startingIndex;
      rows.push(createData(randomSelection.artistName,randomSelection.collectionPrice));
    }
    return rows;
  }
  /* eslint-enable */

  getMessages(pageNum) {
      console.log('pageNum--->',pageNum);
    const TENROWS = 10;
    const messages = this.getData(TENROWS, 0);
    this.setState({
      filteredMessages: messages
    });
  }

  getMuiTheme = () =>
    createMuiTheme({
      typography: {
        useNextVariants: true
      },
      overrides: {
        MUIDataTable: {
          root: {}
        },
        MUIDataTableBodyRow: {
          root: {
            "&:nth-child(odd)": {
              backgroundColor: "#f6f6f6"
            }
          }
        },
        MUIDataTableBodyCell: {}
      }
    });

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { classes } = this.props;
    const { filteredMessages } = this.state;
    return (
      <Fragment>
        <Paper className={classes.root}>
          <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
              data={filteredMessages}
              columns={this.columns}
              options={this.options}
            />
          </MuiThemeProvider>
        </Paper>
      </Fragment>
    );
  }
}
SearchResults.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SearchResults);
