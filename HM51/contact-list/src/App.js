import React from "react";
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      showForm: false,
      newContact: { name: "", email: "", phone: "" },
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.setState({ contacts: response.data });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  handleInputChange = (event) => {
    this.setState({
      newContact: { ...this.state.newContact, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      contacts: [...this.state.contacts, this.state.newContact],
      newContact: { name: "", email: "", phone: "" },
      showForm: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Contact List</h1>
        {this.state.contacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            <div>
              <p>Name: {contact.name}</p>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
            </div>
            <button className="button delete-button" onClick={() => this.deleteContact(contact.id)}>Delete</button>
          </div>
        ))}
        <button className="button add-button" onClick={() => this.setState({ showForm: !this.state.showForm })}>Add Contact</button>
        {this.state.showForm && (
          <form onSubmit={this.handleSubmit} className={`contact-form ${this.state.showForm ? 'active' : ''}`}>
            <input
              name="name"
              value={this.state.newContact.name}
              onChange={this.handleInputChange}
              placeholder="Name"
              required
            />
            <input
              name="email"
              value={this.state.newContact.email}
              onChange={this.handleInputChange}
              placeholder="Email"
              required
            />
            <input
              name="phone"
              value={this.state.newContact.phone}
              onChange={this.handleInputChange}
              placeholder="Phone"
              required
            />
            <button type="submit" className="button save-button">Save</button>
            <button type="button" className="button cancel-button" onClick={() => this.setState({ showForm: false })}>Cancel</button>
          </form>
        )}
      </div>
    )
  }
}

export default App;
