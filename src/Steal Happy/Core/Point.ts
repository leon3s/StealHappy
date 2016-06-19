class Point implements Geometry
{
	private x : number; 
	private y : number; 

	constructor(x : number, y : number)
	{
		this.x = x;
		this.y = y;
	}

	public X() : number
	{
		return this.x;
	}

	public Y() : number
	{
		return this.y;
	}

	/**
	 * Calcule le dot product
	 */
	public multiply(other : Point) : number
	{
		return (this.X() * other.X() + this.Y() * other.Y());
	}

	public substract(other : Point) : Point 
	{
		return new Point(this.X() - other.X(), this.Y() - other.Y());
	}

	public distance(other : Point) : number
	{
		return Math.abs(this.X() - other.X()) + Math.abs(this.Y() - other.Y());
	}
}
