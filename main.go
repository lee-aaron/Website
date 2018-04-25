package main

import (
	"fmt"
	"net/http"
)

func main() {

	// serve main
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, fmt.Sprintf("./%s/index.html", "static"))
	})

	http.ListenAndServe(":8080", nil)
}
