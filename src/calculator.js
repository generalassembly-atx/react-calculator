<!DOCTYPE html>
<html>
  <head>
    <title>Calculator</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <script src="http://fb.me/react-0.12.2.js"></script>
    <script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
    <script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
  </head>
  <body>
    <style>
      .CalculatorForm {
        max-width:250px;
      }
    </style>
    <center>
      <div id="content"></div>
    </center>
    <script type="text/jsx">

    var CalculatorForm = React.createClass({
      handleSubmit: function(e) {
        e.preventDefault();
        var input = this.refs.input.getDOMNode().value.trim();
        if (!input) {
          return;
        }

        var re = /^([-+/*]\d+(\.\d+)?)*/;
        if(re.test(input)===true) {
          var answer = eval(input);
        } else {
          var answer = "Enter a valid expression";
        }

        this.props.onCalculatorSubmit(answer);
        this.refs.input.getDOMNode().value = '';
        return;
      },
      render: function() {
        return (
          <form className="CalculatorForm" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Enter equation:</label>
              <input className="form-control" type="text" ref="input" />
            </div>
            <input className="btn btn-success btn-lg" type="submit" value="Calculate" />
          </form>
        );
      }
    });
    var AnswerValue = React.createClass({
      render: function() {
        return (
          <div className="answer">
            <h2 className="answerValue">
              {this.props.answer}
            </h2>
          </div>
        );
      }
    });
    var CalculatorBox = React.createClass({
      getInitialState: function() {
        return { answer: null };
      },
      handleCalculatorSubmit: function(answer) {
        debugger;
        this.setState({ answer:answer });
      },
      render: function() {
        var answer = this.state.answer;
        debugger;
        return (
          <div className="calculatorBox">
            <h1>Calculator.js</h1>
            <CalculatorForm onCalculatorSubmit={this.handleCalculatorSubmit} />
            { answer ? <AnswerValue answer={answer}/> : null }
          </div>
        );
      }
    });
    React.render(
      <CalculatorBox />,
      document.getElementById('content')
    );
    </script>
  </body>
</html>
