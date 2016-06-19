class Vector implements Geometry
{
	private x : number; 
	private y : number;

	private width : number; 
	private height : number;

	public X() : number
	{
		return this.x;
	}

	public Y() : number
	{
		return this.y;
	}

	public Width() : number
	{
		return this.width; 
	}

	public Height() : number
	{
		return this.height;
	}

	public FinalX() : number
	{
		return this.x + this.width;
	}

	public FinalY() : number
	{
		return this.y + this.height;
	}

	public intersects(other  : Vector) : bool
	{
		//Points relatifs au présent
		var A : Point = new Point(this.X(), this.Y());
		var B : Point = new Point(this.X() + this.Width(), this.Y() + this.Height());
		//points relatifs à l'autre
		var C : Point = new Point(other.X(), other.Y());
		var D : Point = new Point(other.X() + other.Width(), other.Y() + other.Height());
		var E : Point = B.substract(A);
		var F : Point = D.substract(C);

		var P : Point = new Point( -E.Y(), E.X() );
		var h : number = ( (A.substract(C)).mulitply(P) ) / ( F.multiply(P) );
		if(h>= 0 && h <= 1)
			return true;
		return false;
	}
}
