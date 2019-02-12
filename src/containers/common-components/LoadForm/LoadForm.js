import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

class LoadForm extends React.Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    loading: PropTypes.object.isRequired,
    postLoadFormat: PropTypes.func,
    preSaveFormat: PropTypes.func,
    save: PropTypes.func.isRequired
  }

  state = {
    isLoading: false,
    originalValues: undefined,
    initialValues: undefined
  }

  initForm = async() => {
    const { load, postLoadFormat } = this.props
    this.setState({ isLoading: true })
    const originalValues = await load()
    const initialValues = postLoadFormat
      ? postLoadFormat(originalValues)
      : originalValues
    this.setState({
      isLoading: false,
      originalValues,
      initialValues
    });
  }

  save = values => {
    const { postLoadFormat, preSaveFormat, save } = this.props
    let valuesToSave = preSaveFormat
      ? preSaveFormat(values, this.state.originalValues)
      : values
    const result = save(valuesToSave)
    this.setState({
      originalValues: valuesToSave,
      initialValues: postLoadFormat
        ? postLoadFormat(valuesToSave)
        : valuesToSave
    })
    return result
  }

  componentDidMount() {
    this.initForm()
  }

  render() {
    const {
      load,
      loading,
      postLoadFormat,
      preSaveFormat,
      save,
      ...rest
    } = this.props
    const { isLoading, initialValues } = this.state
    return isLoading || !initialValues ? (
      loading
    ) : (
      <Form {...rest} initialValues={initialValues} onSubmit={this.save} />
    )
  }
}
export default LoadForm;
