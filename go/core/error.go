package core

type ChineseMedicineClinicsError struct {
	IsChineseMedicineClinicsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewChineseMedicineClinicsError(code string, msg string, ctx *Context) *ChineseMedicineClinicsError {
	return &ChineseMedicineClinicsError{
		IsChineseMedicineClinicsError: true,
		Sdk:              "ChineseMedicineClinics",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ChineseMedicineClinicsError) Error() string {
	return e.Msg
}
