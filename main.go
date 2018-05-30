package main

import (
	"net/http"
)

func main() {

	// serve main
	http.Handle("/", http.FileServer(http.Dir("./static")))

	http.ListenAndServe(":8080", nil)
}
