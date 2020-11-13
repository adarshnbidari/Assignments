package treestorage

//Node should for node of the tree
type Node struct {
	Country   string
	Device    string
	Webreq    int
	Timespent int
	Node      []Node
}

var tree = map[string]interface{}{

	"Webreq":    0,
	"Timespent": 0,
	"Node":      make([]Node, 0),
}

//GetTree for getting entire
func GetTree() map[string]interface{} {

	return tree

}

//SetTree for setting tree data
func SetTree() bool {

	return true

}
