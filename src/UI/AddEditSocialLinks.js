import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
import Axios from '../services/Axios';
class AddEditSocialLinks extends Component {
    state = {
        links: this.props.links
    }
    deleteLink = (e, link) => {
        let links = this.state.links
        let linkIndex = links.findIndex(storedLink => storedLink === link)
        links.splice(linkIndex, 1)
        this.setState({ links: links })
    }
    saveLinks = () => {
        console.log(this.state.links)
    }
    updateLink = (e, link) => {
        let links = this.state.links
        let linkIndex = links.findIndex(storedLink => storedLink === link)
        links.splice(linkIndex, 1)
        if (!e.target.value.startsWith('http')) {
            links.push(`http://${e.target.value}`)
        } else {
            links.push(e.target.value)
        }
        this.setState({ links: links })
        console.log(links)
    }
    addNewLink = () => {
        let links = this.state.links
        links.push('')
        this.setState({ links: links })
    }
    saveLinks = () => {
        this.validateLinks(this.state.links)

        if (!this.state.error) {
            Axios.authInstance.post(Axios.API.businessEdit.editSocialLinksUrl(this.props.business.slug), { '_method': 'PUT', links: this.state.links }).then(response => {
                if (response && response.status === 200) {
                    this.props.toggleModal()
                    this.props.update()
                }
            })
        }
    }
    validateLinks = links => {
        this.setState({ error: false })
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i')
        links.map(link => {
            let x = pattern.test(link)
            console.log('x', link, x)
            // if (!pattern.test(link)) {
            //     this.setState({ error: true })

            // }
        })
        return true
    }
    render() {
        return (
            <React.Fragment>
                <span>for example: https://wwww.facebook.com/khozinfo</span>
                {
                    this.state.error ?
                        <span>Please make sure all links are valid urls</span>
                        : null
                }
                {
                    this.state.links ?
                        this.state.links.map((link, index) =>
                            <div className="social_link_edit" key={index}>
                                <input id={link} type='text' defaultValue={link} onChange={e => this.updateLink(e, link)} />
                                <button onClick={e => this.deleteLink(link)} className="edit_link_btn"><FaTrash /></button>
                            </div>
                        )
                        : null
                }
                <button onClick={this.addNewLink} className='add_link'>Add Link</button>
                <button onClick={this.saveLinks} className='save_edit_links_btn'>Save</button>
                <button onClick={this.props.toggleModal} className='cancel_edit_links_btn'>Cancel</button>
            </React.Fragment>
        )
    }
}


export default AddEditSocialLinks